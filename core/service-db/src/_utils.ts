import type { MySqlSelect } from 'drizzle-orm/mysql-core';
import type { PgSelect } from 'drizzle-orm/pg-core';
import type { SQLiteSelect } from 'drizzle-orm/sqlite-core';

export function withPagination<T extends SQLiteSelect | MySqlSelect | PgSelect>(
  qb: T,
  page: number,
  pageSize: number = 10
) {
  return qb.limit(pageSize).offset(page * pageSize);
}
