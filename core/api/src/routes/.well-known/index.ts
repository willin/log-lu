import { Hono } from 'hono';
import webfinger from './webfinger';
import nodeinfo from './nodeinfo';

const wellKnown = new Hono();

wellKnown.route('/.well-known', nodeinfo);
wellKnown.route('/.well-known', webfinger);

export default wellKnown;
