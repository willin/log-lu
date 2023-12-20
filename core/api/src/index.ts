import { Hono } from 'hono';
import nodeinfo from './routes/nodeinfo';
import wellKnown from './routes/well-known';

const api = new Hono();

api.route('/', nodeinfo);
api.route('/', wellKnown);

export default api;
