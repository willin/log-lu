import { BasicHandle } from './_basic';
import type { DBInstance, LogLuSchema } from './_types';

export class App extends BasicHandle {
  constructor(db: DBInstance, schema: LogLuSchema);
  constructor(db: DBInstance, schema: LogLuSchema, table: keyof LogLuSchema = 'app') {
    super(db, schema, table);
    // overwrite schema
  }
}
