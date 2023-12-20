import { Hono } from 'hono';
import authorize from './authorize';
import revoke from './revoke';
import token from './token';

// https://docs.joinmastodon.org/methods/oauth/
const oauth = new Hono();

oauth.route('/oauth', authorize);
oauth.route('/oauth', token);
oauth.route('/oauth', revoke);

export default oauth;
