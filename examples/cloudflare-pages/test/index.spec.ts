import { expect, test } from 'bun:test';
import { Hono } from 'hono';
import { testClient } from 'hono/testing';

test('test', async () => {
  const app = new Hono().get('/search', (c) => c.json({ hello: 'world' }));
  const res = await testClient(app).search.$get();

  expect(await res.json()).toEqual({ hello: 'world' });
});
