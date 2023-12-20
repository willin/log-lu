import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';

const appsV1 = new Hono();

appsV1.post(
  '/apps',
  zValidator(
    'json',
    z.object({
      client_name: z.string(),
      redirect_uris: z.string(),
      scopes: z.string().optional(),
      website: z.string().optional()
    }),
    (result, c) => {
      if (!result.success) {
        return c.json(
          {
            error: `Validation failed: ${result.error.issues.map((x) => x.code).join(',')}`
          },
          400
        );
      }
    }
  ),
  (c) => {
    const data = c.req.valid('json');
    const resp = {
      id: '1',
      ...data,
      // name: 'test app',
      // website: null,
      // redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
      client_id: 'TWhM-tNSuncnqN7DBJmoyeLnk6K3iJJ71KKXxgL1hPM',
      client_secret: 'ZEaFUFmF0umgBX1qKJDjaU99Q31lDkOU8NutzTOoliw',
      vapid_key:
        'BCk-QqERU0q-CfYZjcuB6lnyyOYfJ2AifKqfeGIm7Z-HiTU5T9eTG5GxVA0_OH5mMlI4UkkDTpaZwozy0TzdZ2M='
    };
    return c.json(resp);
  }
);

appsV1.get('/apps/verify_credentials', (c) => {
  const bearer = c.req.raw.headers.get('Authorization');
  if (!bearer) {
    return c.json(
      {
        error: 'The access token is invalid'
      },
      401
    );
  }
  // const token = bearer.replace('^Bearer ', '');

  return c.json({
    name: 'test app',
    website: null,
    vapid_key:
      'BCk-QqERU0q-CfYZjcuB6lnyyOYfJ2AifKqfeGIm7Z-HiTU5T9eTG5GxVA0_OH5mMlI4UkkDTpaZwozy0TzdZ2M='
  });
});

export default appsV1;
