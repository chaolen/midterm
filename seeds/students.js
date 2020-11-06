
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw(
    `
    INSERT INTO students
    VALUES
    (
      DEFAULT,
      'Charlyn',
      'Siaotong',
      '2000-02-02',
      7,
      3
    ),
    (
      DEFAULT,
      'Froilan',
      'Blanca',
      '2000-01-29',
      6,
      3
    ),
    (
      DEFAULT,
      'Edel Jude',
      'Romero',
      '1999-05-29',
      7,
      3
    ),
    (
      DEFAULT,
      'Carl',
      'Avelino',
      '1999-10-19',
      2,
      2
    ),
    (
      DEFAULT,
      'Julia Sela',
      'Sontillanosa',
      '1999-07-19',
      1,
      1
    ),
    (
      DEFAULT,
      'Kishia Niccole',
      'Balagosa',
      '1999-05-10',
      3,
      1
    ),
    (
      DEFAULT,
      'Jasper John',
      'Aguirre',
      '1999-03-12',
      4,
      2
    )
    `
  )
};
