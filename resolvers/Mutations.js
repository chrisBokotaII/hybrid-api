const { Movies } = require("../models");
/**
 *  defining the resolvers mutations
 */
exports.Mutation = {
  createMovie: async (parent, args, context, info) => {
    const { title, director, year, rating, description, image, casts } = args;
    const movie = await Movies.create({
      title,
      director,
      year,
      rating,
      description,
      image,
      casts,
    });
    return movie;
  },
  updateMovie: async (parent, args, context, info) => {
    const { title, director, year, rating, description, image, casts } = args;
    const movie = await Movies.findByPk(args.id);
    movie.update({
      title,
      director,
      year,
      rating,
      description,
      image,
      casts,
    });
    return movie;
  },
  deleteMovie: async (parent, args, context, info) => {
    const movie = await Movies.destroy({
      where: {
        id: args.id,
      },
    });
    return movie;
  },
};
