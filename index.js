/**
 * importing necessary modules and files((typedefs and resolvers))
 */

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const typeDefs = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutations");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const movieRouter = require("./routes/movie");

const { sequelize } = require("./models");
/**
 * confuguring the server
 */
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
/**
 * creating a new ApolloServer instance
 */
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});
(async () => {
  await server.start();
  app.use("/graphql", expressMiddleware(server));
})();
/**
 * creating an endpoint for our restful api
 */

app.use("/api", movieRouter);
/**
 * listening to the port and connecting to the database
 */

app.listen(port, async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  console.log(`Server is running on port ${port}`);
});
// app.get("*", (req, res) => {
//   res.status(400).json({
//     message: "Page not found",
//   });
// });
