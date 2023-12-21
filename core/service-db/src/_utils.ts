import type { MySqlSelect } from 'drizzle-orm/mysql-core';
import type { PgSelect } from 'drizzle-orm/pg-core';
import type { SQLiteSelect } from 'drizzle-orm/sqlite-core';

/**
 * Pagination Query Builder
 *
 * @example
 * const query = db.select().from(users).where(eq(users.id, 1));
 * withPagination(query, 1); // ❌ Type error - the query builder is not in dynamic mode
 * const dynamicQuery = query.$dynamic();
 * withPagination(dynamicQuery, 1); // ✅ OK
 *
 * @param qb
 * @param page
 * @param pageSize
 */
export function withPagination<T extends SQLiteSelect | MySqlSelect | PgSelect>(
  qb: T,
  page: number = 1,
  pageSize: number = 10
) {
  return qb.limit(pageSize).offset(page * pageSize);
}
