import { Hono } from 'hono';
import wellKnown from './.well-known';
import nodeinfo from './nodeinfo';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono!'));
app.route('/', nodeinfo);
app.route('/', wellKnown);

export default app;
