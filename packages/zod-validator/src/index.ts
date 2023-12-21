import type { Context, TypedResponse, Env, MiddlewareHandler } from 'hono';
import type { z, ZodSchema, ZodError } from 'zod';

export type Hook<T, E extends Env, P extends string, O = {}> = (
  result: { success: true; data: T } | { success: false; error: ZodError; data: T },
  c: Context<E, P>
) => Response | Promise<Response> | void | Promise<Response | void> | TypedResponse<O>;

type HasUndefined<T> = undefined extends T ? true : false;

export const jfValidator =
  <
    T extends ZodSchema,
    E extends Env,
    P extends string,
    O = z.output<T>,
    V extends {
      out: { form: O };
    } = {
      out: { form: O };
    }
  >(
    schema: T,
    hook?: Hook<z.infer<T>, E, P>
  ): MiddlewareHandler<E, P, V> =>
  async (c, next): Promise<Response | void> => {
    const contentType = c.req.header('Content-Type') || '';
    let value = {};
    if (contentType.startsWith('application/json')) {
      value = await c.req.json();
    } else {
      value = await c.req.parseBody({ all: true });
    }
    const result = await schema.safeParseAsync(value);

    if (hook) {
      const hookResult = hook({ data: value, ...result }, c);
      if (hookResult) {
        if (hookResult instanceof Response || hookResult instanceof Promise) {
          return hookResult;
        }
        if ('response' in hookResult) {
          return hookResult.response as void;
        }
      }
    }

    if (!result.success) {
      return c.json(result, 400);
    }

    const data = result.data as z.infer<T>;
    c.req.addValidatedData('form', data);

    await next();
  };
