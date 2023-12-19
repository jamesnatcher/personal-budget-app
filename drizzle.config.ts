// drizzle.config.ts
import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();
const { CONNECTION_STRING } = process.env;

if (!CONNECTION_STRING) {
	throw new Error('No url');
}

export default {
	schema: './src/lib/database/schema.ts',
	out: './migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: CONNECTION_STRING
	}
} satisfies Config;
