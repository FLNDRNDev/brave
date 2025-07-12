// src/db/index.ts

/**
 * @see https://orm.drizzle.team/docs/introduction
 */


import { drizzle } from 'drizzle-orm/neon-http';


export const db = drizzle(process.env.DATABASE_URL!);

