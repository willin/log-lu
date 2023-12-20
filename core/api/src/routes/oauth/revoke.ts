import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';

const revoke = new Hono();

revoke.post(
  '/revoke',
  zValidator(
    'form',
    z.object({
      client_id: z.string(),
      client_secret: z.string(),
      token: z.string()
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
    // return c.json({
    //   error: 'unauthorized_client',
    //   error_description: 'You are not authorized to revoke this token'
    // }, 403);
    return c.json({});
  }
);

export default revoke;
