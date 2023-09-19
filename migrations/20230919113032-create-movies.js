"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("movies", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          max: {
            args: 50,
            msg: "Title must be less than 50 characters",
          },
        },
      },
      director: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          max: {
            args: 50,
            msg: "Director must be less than 50 characters",
          },
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          max: {
            args: 500,
            msg: "Description must be less than 500 characters",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",
      },
      casts: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("movies");
  },
};
