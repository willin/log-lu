import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { jrd, xrd, toXRD } from '../../utils/xml';

const webfinger = new Hono();

webfinger.get(
  '/webfinger',
  zValidator(
    'query',
    z.object({
      resource: z.string().regex(/^acct:[^@]+@[^@]+$/)
    }),
    (result, c) => {
      if (!result.success) {
        return c.json({ code: 400 }, 400);
      }
    }
  ),
  (c) => {
    const { resource: subject } = c.req.valid('query');
    const accept = c.req.raw.headers.get('accept');
    const url = new URL(c.req.url);
    const domain = `${url.protocol}//${url.host}`;

    const aliases = [`${domain}/users/willin`];
    const links = [
      {
        href: `${domain}/users/willin`,
        rel: 'http://webfinger.net/rel/profile-page',
        type: 'text/html'
      },
      {
        href: `${domain}/users/willin`,
        rel: 'self',
        type: 'application/activity+json'
      },
      {
        href: `${domain}/users/willin`,
        rel: 'self',
        type: 'application/ld+json; profile="https://www.w3.org/ns/activitystreams"'
      },
      {
        rel: 'http://ostatus.org/schema/1.0/subscribe',
        template: `${domain}/ostatus_subscribe?acct={uri}`
        // template: `${domain}/authorize_interaction?uri={uri}`
      }
    ];

    if (accept === xrd) {
      c.header('Content-Type', xrd);
      return c.body(
        toXRD(
          { element: 'Subject', value: subject },
          ...aliases.map((alias) => ({ element: 'Alias', value: alias })),
          ...links.map((link) => ({ element: 'Link', attributes: link }))
        )
      );
    }
    c.header('Content-Type', jrd);
    const resp = {
      aliases,
      links,
      subject
    };
    return c.json(resp);
  }
);

export default webfinger;
