
exports.up = function(knex) {
    return knex.raw(
        `
            CREATE TABLE organization(
                org_id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
                org_name text not null,
                org_abb text not null
            )
        `
  )
};

exports.down = function(knex) {
  return knex.raw('DROP TABLE organization')
};