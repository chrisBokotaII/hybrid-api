const { Movies } = require("../models");

exports.Query = {
  movies: async (parent, args, context, info) => {
    return await Movies.findAll();
  },
  movie: async (parent, args, context, info) => {
    return await Movies.findByPk(args.id);
  },
};
