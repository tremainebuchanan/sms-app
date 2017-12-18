
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table){
      table.increments('id').notNullable().index()
      table.string('ref_code', 10).unique().notNullable()
      table.string('first_name', 50).notNullable()
      table.string('last_name', 50).notNullable()
      table.string('email', 254).notNullable()
      table.string('password', 256).notNullable()
      table.string('user_type', 10).notNullable()
      table.string('org_id', 10).notNullable()
      table.boolean('is_active').defaultTo('false')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    }),
    knex.schema.createTableIfNotExists('userstypes', function(table){
      table.increments('id').notNullable().index()
      table.string('ref_code', 10).unique().notNullable()
      table.string('title', 20).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    }),
    knex.schema.createTableIfNotExists('organizations', function(table){
      table.increments('id').notNullable().index()
      table.string('ref_code', 10).unique().notNullable()
      table.string('title', 100).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('userstypes'),
    knex.schema.dropTableIfExists('organizations')
  ])
};
