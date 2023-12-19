import { Hono } from 'hono';
import nodeinfo from './nodeinfo';

const wellKnown = new Hono();

wellKnown.route('/.well-known', nodeinfo);

export default wellKnown;
