import { Hono } from 'hono';
import { cors } from 'hono/cors';
import mastodonApi from './routes/api';
import nodeinfo from './routes/nodeinfo';
import oauth from './routes/oauth';
import wellKnown from './routes/well-known';

const api = new Hono();

api.use(
  '*',
  cors({
    origin: '*',
    credentials: true
  })
);

api.route('/', nodeinfo);
api.route('/', wellKnown);
api.route('/', oauth);
api.route('/api', mastodonApi);

export default api;
