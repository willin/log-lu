import type { DBInstance, LogLuSchema } from './_types';

export abstract class BasicHandle {
  protected db: DBInstance;
  protected schema: LogLuSchema;
  protected table: keyof LogLuSchema;

  constructor(db: DBInstance, schema: LogLuSchema, table: keyof LogLuSchema) {
    this.db = db;
    this.schema = schema;
    this.table = table;
  }

  public findFirst(config: Parameters<DBInstance['query'][keyof LogLuSchema]['findFirst']>[0]) {
    return this.db.query[this.table].findFirst(config);
  }

  public findMany(config: Parameters<DBInstance['query'][keyof LogLuSchema]['findMany']>[0]) {
    return this.db.query[this.table].findMany(config);
  }
}
