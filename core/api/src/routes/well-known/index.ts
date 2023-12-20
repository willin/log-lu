import { Hono } from 'hono';
import hostMeta from './host-meta';
import nodeinfo from './nodeinfo';
import webfinger from './webfinger';

const wellKnown = new Hono();

wellKnown.route('/.well-known', nodeinfo);
wellKnown.route('/.well-known', webfinger);
wellKnown.route('/.well-known', hostMeta);

export default wellKnown;
