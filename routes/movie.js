const e = require("express");
const express = require("express");
const MovieController = require("../controllers/movieCT");

const Router = express.Router();

Router.get("/", MovieController.getAllMovies);
Router.get("/:id", MovieController.getMovieById);
Router.post("/create", MovieController.createMovie);
Router.put("/:id", MovieController.updateMovie);
Router.delete("/:id", MovieController.deleteMovie);

module.exports = Router;
