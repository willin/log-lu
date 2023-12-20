import { Hono } from 'hono';
import appsV1 from './v1/apps';
import instanceV1 from './v1/instance';
import instanceV2 from './v2/instance';

const mastodonApi = new Hono();

// v1 apis
mastodonApi.route('/v1', instanceV1);
mastodonApi.route('/v1', appsV1);
// v2 apis
mastodonApi.route('/v2', instanceV2);

export default mastodonApi;
