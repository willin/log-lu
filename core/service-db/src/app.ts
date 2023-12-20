import type { DBInstance, LogLuSchema } from './_types';

export class App extends BasicHandle {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(db: DBInstance, schema: LogLuSchema, table = '') {
    super(db, schema, 'app');
  }
}
