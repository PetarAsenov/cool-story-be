'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "test-homepage",
          backgroundColor: "#AAAAAA",
          color: '222222',
          description: "test is the best",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: "dummy-homepage",
          backgroundColor: "#AAAA00",
          color: '2222AA',
          description: "dummy is the best",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  }
};
