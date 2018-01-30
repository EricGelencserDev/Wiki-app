'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pages',
      [
        {
          name: 'Morris',
          content: 'the',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Felix',
          content: 'tada',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Gov.',
          content: 'da',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Uers', null, {})
  }
}
