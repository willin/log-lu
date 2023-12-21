import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import type { DBInstance, LogLuSchema } from './_types';

export abstract class BasicHandle {
  protected db: DBInstance;
  protected schema: LogLuSchema;
  protected table: keyof LogLuSchema;
  public insertSchema: ReturnType<typeof createInsertSchema<LogLuSchema[keyof LogLuSchema]>>;
  public selectSchema: ReturnType<typeof createSelectSchema<LogLuSchema[keyof LogLuSchema]>>;

  constructor(db: DBInstance, schema: LogLuSchema, table: keyof LogLuSchema) {
    this.db = db;
    this.schema = schema;
    this.table = table;
    this.insertSchema = createInsertSchema(schema[table]);
    this.selectSchema = createSelectSchema(schema[table]);
  }

  public findFirst(config: Parameters<DBInstance['query'][keyof LogLuSchema]['findFirst']>[0]) {
    return this.db.query[this.table].findFirst(config);
  }

  public findMany(config: Parameters<DBInstance['query'][keyof LogLuSchema]['findMany']>[0]) {
    return this.db.query[this.table].findMany(config);
  }
}
