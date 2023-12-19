import { Hono } from 'hono';
import { LOGLU_VERSION } from '../../utils/version';

const nodeinfo20 = new Hono();

nodeinfo20.get('/2.0', (c) => {
  const resp = {
    version: '2.0',
    software: { name: 'loglu', version: LOGLU_VERSION },
    protocols: ['activitypub'],
    services: { outbound: [], inbound: [] },
    usage: {
      users: {
        total: 1,
        activeMonth: 1,
        activeHalfyear: 1
      },
      localPosts: 0
    },
    openRegistrations: false,
    metadata: {}
  };
  return c.json(resp);
});

export default nodeinfo20;