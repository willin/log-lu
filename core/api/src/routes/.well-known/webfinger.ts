import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

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
    const { resource } = c.req.valid('query');
    const url = new URL(c.req.url);
    const domain = `${url.protocol}//${url.host}`;

    const resp = {
      aliases: [`${domain}/users/willin`],
      links: [
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
        }
      ],
      subject: resource
    };
    return c.json(resp);
  }
);

export default webfinger;

// <?xml version="1.0" encoding="UTF-8"?>
// <XRD
// 	xmlns="http://docs.oasis-open.org/ns/xri/xrd-1.0">
// 	<Subject>acct:willin@miantiao.me</Subject>
// 	<Alias>${domain}/users/willin</Alias>
// 	<Alias>https://homelab.host/users/root</Alias>
// 	<Link href="${domain}/users/willin" rel="http://webfinger.net/rel/profile-page" type="text/html" />
// 	<Link href="${domain}/users/willin" rel="self" type="application/activity+json" />
// 	<Link href="${domain}/users/willin" rel="self" type="application/ld+json; profile=&quot;https://www.w3.org/ns/activitystreams&quot;" />
// 	<Link rel="http://ostatus.org/schema/1.0/subscribe" template="${domain}/ostatus_subscribe?acct={uri}" />
// </XRD>
