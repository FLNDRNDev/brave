// src/db/index.ts

/**
 * @see https://orm.drizzle.team/docs/introduction
 */

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
	throw new Error('DATABASE_URL environment variable is not defined. Please check your .env.local file.');
}

export const db = drizzle(DATABASE_URL);

