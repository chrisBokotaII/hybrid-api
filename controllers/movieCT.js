const { Movies } = require("../models");

class MovieController {
  static async createMovie(req, res) {
    try {
      const { title, director, year, rating, description, image, casts } =
        req.body;

      let movie = await Movies.create({
        title,
        director,
        year,
        rating,
        description,
        image,
        casts,
      });
      res.status(201).json({
        status: "success",
        data: {
          movie,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async getAllMovies(req, res) {
    try {
      let movies = await Movies.findAll();
      res.status(200).json({
        status: "success",
        data: {
          movies,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async getMovieById(req, res) {
    try {
      const { id } = req.params;
      let movie = await Movies.findByPk(id);
      res.status(200).json({
        status: "success",
        data: {
          movie,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async updateMovie(req, res) {
    try {
      const { id } = req.params;
      const { title, director, year, rating, description, image, casts } =
        req.body;
      let movie = await Movies.update(
        {
          title,
          director,
          year,
          rating,
          description,
          image,
          casts,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({
        status: "success",
        data: {
          movie,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      let movie = await Movies.destroy({ where: { id } });
      res.status(200).json({
        status: "success",
        data: {
          movie,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = MovieController;
