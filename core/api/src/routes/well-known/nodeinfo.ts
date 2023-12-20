import { Hono } from 'hono';

const nodeinfo = new Hono();

nodeinfo.get('/nodeinfo', (c) => {
  const url = new URL(c.req.url);
  const domain = `${url.protocol}//${url.host}`;
  c.header('Cache-Control', 'max-age=604800, stale-while-revalidate=86400');

  const resp = {
    links: [
      {
        rel: 'http://nodeinfo.diaspora.software/ns/schema/2.0',
        href: `${domain}/nodeinfo/2.0`
      },
      {
        rel: 'http://nodeinfo.diaspora.software/ns/schema/2.1',
        href: `${domain}/nodeinfo/2.1`
      }
    ]
  };
  return c.json(resp);
});

export default nodeinfo;
