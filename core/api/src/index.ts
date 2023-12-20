import { Hono } from 'hono';
import nodeinfo from './routes/nodeinfo';
import wellKnown from './routes/well-known';

const app = new Hono();

app.route('/', nodeinfo);
app.route('/', wellKnown);

export default app;
