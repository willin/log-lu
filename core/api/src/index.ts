import { Hono } from 'hono';
import wellKnown from './routes/.well-known';
import nodeinfo from './routes/nodeinfo';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono!'));
app.route('/', nodeinfo);
app.route('/', wellKnown);

export default app;
