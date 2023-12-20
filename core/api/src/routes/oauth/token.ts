import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';

const token = new Hono();

token.post(
  '/token',
  zValidator(
    'form',
    z.object({
      grant_type: z.string(),
      code: z.string().optional(),
      client_id: z.string(),
      client_secret: z.string(),
      redirect_uri: z.string(),
      scope: z.string().optional()
    }),
    (result, c) => {
      if (!result.success) {
        return c.json(
          {
            error: result.error.errors[0].code,
            error_description: result.error.errors[0].message
          },
          400
        );
      }
    }
  ),
  (c) => {
    // return c.json(
    //   {
    //     error: 'invalid_client',
    //     error_description:
    //       'Client authentication failed due to unknown client, no client authentication included, or unsupported authentication method.'
    //   },
    //   401
    // );
    const resp = {
      access_token: 'ZA-Yj3aBD8U8Cm7lKUp-lm9O9BmDgdhHzDeqsY8tlL0',
      token_type: 'Bearer',
      scope: 'read write follow push',
      created_at: 1573979017
    };
    return c.json(resp);
  }
);

export default token;
