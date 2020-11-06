
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw(
    `
    INSERT INTO organization
    VALUES
    (
      DEFAULT,
      'Institute of Electronic Engineers of the Pilippines',
      'IECEP'
    ),
    (
      DEFAULT,
      'Institute of Integrated Electrical Engineers of the Pilippines Inc. CPU Student Chapter',
      'IIEE-CPUSC'
    ),
    (
      DEFAULT,
      'Institute of Packaging Professionals- Central Philippine University Chapter',
      'IPP-CPUC'
    ),
    (
      DEFAULT,
      'Junior Philippine Institute of Chemical Engineers - CPU Chapter',
      'JPIChE-CPUC'
    ),
    (
      DEFAULT,
      'Pilippine Institute of Civil Engineers',
      'PICE'
    ),
    (
      DEFAULT,
      'Pilippine Society of Machanical Engineers- CPU Student Chapter',
      'PSME-CPUSC'
    ),
    (
      DEFAULT,
      'Pilippine Society of Softwaer Engineers',
      'PSSE'
    ),
    (
      DEFAULT,
      'Campus Bible Fellowship',
      'CBF'
    ),
    (
      DEFAULT,
      'CPU Gospel Team',
      'CPUGT'
    ),
    (
      DEFAULT,
      'KOALISYON',
      'KOA'
    ),
    (
      DEFAULT,
      'Reform Organization',
      'REFORM'
    )
    `
  )
};
