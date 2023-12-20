import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';

const authorize = new Hono();

authorize.get(
  '/authorize',
  zValidator(
    'query',
    z.object({
      response_type: z.enum(['code']),
      client_id: z.string(),
      redirect_uri: z.string(),
      scope: z.string().optional(),
      force_login: z
        .string()
        .optional()
        .transform((v) => v === 'true'),
      lang: z.string().optional()
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
    //     error: 'invalid_grant',
    //     error_description:
    //       'The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.'
    //   },
    //   400
    // );
    const { redirect_uri } = c.req.valid('query');
    const code = 'qDFUEaYrRK5c-HNmTCJbAzazwLRInJ7VHFat0wcMgCU';
    return c.redirect(`${redirect_uri}?code=${code}`);
  }
);

export default authorize;
