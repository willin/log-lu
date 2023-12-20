import api from '@loglu/api';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('hello world');
});

app.route('/', api);

export default app;
