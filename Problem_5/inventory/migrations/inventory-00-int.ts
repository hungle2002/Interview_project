import { Knex } from 'knex';

const { SCHEMA_NAME } = process.env;
const schemaName = SCHEMA_NAME || 'inventory';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createSchemaIfNotExists(schemaName);

  /* --- Migration for products table --- */
  await knex.schema
    .withSchema(schemaName)
    .hasTable('products')
    .then(function (exists) {
      if (!exists) {
        return knex.schema
          .withSchema(schemaName)
          .createTable('products', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.text('description');
            table.integer('price').notNullable();
            table.text('image');
            table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable();
            table.dateTime('updatedAt').defaultTo(knex.fn.now()).notNullable();
          });
      }
    });
  }

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('products');

  await knex.schema.dropSchemaIfExists(schemaName, true);
}
