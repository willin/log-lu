import { Hono } from 'hono';
import nodeinfo20 from './2.0';
import nodeinfo21 from './2.1';

const nodeinfo = new Hono();

nodeinfo.route('/nodeinfo', nodeinfo20);
nodeinfo.route('/nodeinfo', nodeinfo21);

export default nodeinfo;
