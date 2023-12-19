// db/db.server.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { CONNECTION_STRING } from '$env/static/private';

// const client = dev ? postgres(CONNECTION_STRING) : postgres(CONNECTION_STRING, { ssl: 'require' });
const client = postgres(CONNECTION_STRING);
export const db = drizzle(client, {});
