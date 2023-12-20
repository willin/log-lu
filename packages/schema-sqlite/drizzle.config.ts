import type { Config } from 'drizzle-kit';
export default {
  schema: './src/*.ts',
  out: './migrations'
} satisfies Config;
