import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';


dotenv.config({ path: '.env.local' });

// Validate DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required. Please add it to your .env.local file.');
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL,
  },
});
