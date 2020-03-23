'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "test-story-1",
          content: "test is the best part 1",
          imageUrl: "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2020/03/20/NEWSHUB-covid-19-testing-1120.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 1
        },
        {
          name: "test-story-2",
          content: "test is the best part 2",
          imageUrl: "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2020/03/20/NEWSHUB-covid-19-testing-1120.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 1
        },
        {
          name: "dummy-story-1",
          content: "dummy is the best part 1",
          imageUrl: "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2020/03/20/NEWSHUB-covid-19-testing-1120.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 2
        },
        {
          name: "dummy-story-2",
          content: "dummy is the best part 2",
          imageUrl: "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2020/03/20/NEWSHUB-covid-19-testing-1120.JPG",
          createdAt: new Date(),
          updatedAt: new Date(),
          homepageId: 2
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  }
};
