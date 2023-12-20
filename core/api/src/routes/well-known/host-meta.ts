import { Hono } from 'hono';
import { jrd, xrd, toXRD } from '../../utils/xml';

const hostMeta = new Hono();

hostMeta.get('/host-meta', (c) => {
  const url = new URL(c.req.url);
  const domain = `${url.protocol}//${url.host}`;

  const accept = c.req.raw.headers.get('accept');
  if (accept === jrd) {
    c.header('Content-Type', jrd);
    const resp = {
      links: [
        {
          rel: 'lrdd',
          type: jrd,
          href: `${domain}/.well-known/webfinger?resource={uri}`
        }
      ]
    };
    return c.json(resp);
  }

  c.header('Content-Type', xrd);
  return c.body(
    toXRD({
      element: 'Link',
      attributes: {
        rel: 'lrdd',
        type: xrd,
        template: `${domain}/.well-known/webfinger?resource={uri}`
      }
    })
  );
});

hostMeta.get('/host-meta.json', (c) => {
  const url = new URL(c.req.url);
  const domain = `${url.protocol}//${url.host}`;

  c.header('Content-Type', jrd);
  const resp = {
    links: [
      {
        rel: 'lrdd',
        type: jrd,
        href: `${domain}/.well-known/webfinger?resource={uri}`
      }
    ]
  };
  return c.json(resp);
});

export default hostMeta;
