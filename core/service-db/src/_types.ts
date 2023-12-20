import type { schema as SqliteSchema } from '@loglu/schema-sqlite';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
// import { MySqlDatabase } from 'drizzle-orm/mysql-core';
// import type { PgDatabase } from 'drizzle-orm/pg-core';

export type LogLuSchema = typeof SqliteSchema; // | typeof PgSchema | typeof MysqlSchema

export type DBInstance = DrizzleD1Database<typeof SqliteSchema>; // | PgDatabase<typeof PgSchema> |  MySqlDatabase<typeof MysqlSchema>
