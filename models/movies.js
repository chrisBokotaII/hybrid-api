"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movies.init(
    {
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
    },
    {
      sequelize,
      tableName: "movies",
      modelName: "Movies",
    }
  );
  return Movies;
};
