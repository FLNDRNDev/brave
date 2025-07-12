// src/app/api/users/webhook/route.ts

/**
 * @see https://clerk.com/docs/references/webhooks/user-webhooks
 */


import { Webhook } from 'svix';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { db } from '@/db';
import { users } from '@/db/schema';

export async function POST(req: Request) {
	const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

	if (!SIGNING_SECRET) {
		return new Response('Error: Please add CLERK_WEBHOOK_SIGNING_SECRET from Clerk Dashboard to .env or .env.local', { 
			status: 500 
		});
	}

	// Create a new Svix instance with the signing secret
	const wh = new Webhook(SIGNING_SECRET);

	//  Get the headers
	const headerPayload = await headers();
	const svix_id = headerPayload.get('svix-id');
	const svix_timestamp = headerPayload.get('svix-timestamp');
	const svix_signature = headerPayload.get('svix-signature');

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response('Error: Missing Svix headers', { 
			status: 400,
		})
	}

	// Get body
	const payload = await req.json();
	const body = JSON.stringify(payload);

	let evt: WebhookEvent;

	// Verify payload with headers
	try {
		evt = wh.verify(body, {
			'svix-id': svix_id,
			'svix-timestamp': svix_timestamp,
			'svix-signature': svix_signature,
		}) as WebhookEvent
	} 
	catch (err) {
		console.error('Error: Could not verify webhook: ', err);

		return new Response('Error: Verification error', { 
			status: 400 
		})
	}

	// Do something with the payload
	// For this guide, log payload to console
	const eventType = evt.type;
	
	// Helper function to format user name
	const formatUserName = (data: any): string => {
		const firstName = (data.first_name || '').trim();
		const lastName = (data.last_name || '').trim();
		const name = `${firstName} ${lastName}`.trim();
		return name || 'Unknown User';
	};
	
	// TODO: Add the properties for Sign Up & In with Email credentials
	// Create user in database
	if (eventType === 'user.created') {
		const { data } = evt;

		try {
			const name = formatUserName(data);
			
			await db.insert(users).values({
				clerkId: data.id,
				name,
				imageUrl: data.image_url || null,
			});
		} catch (error) {
			console.error('Error creating user:', error);
			return new Response('Error creating user', { 
				status: 500 
			});
		}
	} 

	// Update user in database
	if (eventType === 'user.updated') {
		const { data } = evt;

		try {
			const name = formatUserName(data);
			
			await db
				.update(users)
				.set({
					name,
					imageUrl: data.image_url || null,
					updatedAt: new Date(),
				})
				.where(eq(users.clerkId, data.id));
		} catch (error) {
			console.error('Error updating user:', error);
			return new Response('Error updating user', { 
				status: 500 
			});
		}
	}

	// Delete user from database
	if (eventType === 'user.deleted') {
		const { data } = evt;

		if (!data.id || typeof data.id !== 'string' || data.id.trim().length === 0) {
			return new Response('Missing user ID', { 
				status: 400 
			});
		}

		try {
			await db.delete(users).where(eq(users.clerkId, data.id));
		} catch (error) {
			console.error('Error deleting user:', error);
			return new Response('Error deleting user', { 
				status: 500 
			});
		}
	}

	return new Response('Webhook received', { status: 200 });
}