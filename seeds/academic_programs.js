
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw(
    `
    INSERT INTO academicPrograms
    VALUES 
    (
      DEFAULT,
      'Bachelor of Science in Chemical Engineering',
      'BSChE'
    ) ,
    (
      DEFAULT,
      'Bachelor of Science in Civil Engineering',
      'BSCE'
    ),
    (
      DEFAULT,
      'Bachelor of Science in Electrical Engineering',
      'BSEE'
    ),
    (
      DEFAULT,
      'Bachelor of Science in Electronics Engineering',
      'BSECE'
    ),
    (
      DEFAULT,
      'Bachelor of Science in Mechanical Engineering',
      'BSME'
    ),
    (
      DEFAULT,
      'Bachelor of Science in Packaging Engineering',
      'BSPkgE'
    ),
    (
      DEFAULT,
      'Bachelor of Science in Software Engineering',
      'BSSE'
    )
    `
   )
};
