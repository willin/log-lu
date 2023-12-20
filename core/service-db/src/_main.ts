import type { DBInstance, LogLuSchema } from './_types';
import { App } from './app';

export class DatabaseService {
  public app: App;
  constructor(db: DBInstance, schema: LogLuSchema) {
    this.app = new App(db, schema);
  }
}
