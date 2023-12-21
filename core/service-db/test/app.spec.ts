import { schema } from '@loglu/schema-sqlite';
import { Database } from 'bun:sqlite';
import { describe, test, expect } from 'bun:test';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { App } from '../src/app';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite, { schema });

describe('App Handle', () => {
  test('Constructor', () => {
    const app = new App(db, schema);
    expect(app).toBeInstanceOf(App);
    expect(app.insertSchema).toBeDefined();
  });

  test('Basic findFirst', async () => {
    const app = new App(db, schema);
    const result = await app.findFirst({
      where: (tb, { eq }) => eq(tb.id, 'x')
    });
    expect(result).toBeUndefined();
  });
  test('Basic findMany', async () => {
    const app = new App(db, schema);
    const result = await app.findMany();
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});
