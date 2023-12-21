import { sql } from 'drizzle-orm';
import { text, sqliteTable, unique, index } from 'drizzle-orm/sqlite-core';

export const app = sqliteTable(
  'app',
  {
    id: text('id').primaryKey(),
    user_id: text('user_id').notNull().default(''),
    name: text('name').notNull(),
    website: text('website').notNull().default(''),
    redirect_uri: text('redirect_uri').notNull().default(''),
    client_id: text('client_id').notNull(),
    client_secret: text('client_secret').notNull(),
    scopes: text('scopes').notNull(),
    created_at: text('created_at')
      .notNull()
      .default(sql`(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW'))`)
  },
  (table) => ({
    idx1: index('idx_app_created').on(table.created_at),
    idx2: index('idx_app_user').on(table.user_id),
    unq1: unique('uidx_app_client_id').on(table.client_id)
  })
);
