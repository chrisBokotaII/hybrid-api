const typeDefs = ` #graphql

type Movie {
    id: ID
    title: String!
    director: String!
    year: Int!
    rating: Int!
    description: String!
    image: String!
    casts: String!

}

type Query {
    movies: [Movie]
    movie(id: ID!): Movie

}

type Mutation {
    createMovie(
        id: ID
        title: String!
        director: String!
        year: Int!
        rating: Int!
        description: String!
        image: String!
        casts: String!
    ): Movie
    updateMovie(
        id: ID!
        title: String!
        director: String
        year: Int
        rating: Int
        description: String
        image: String
        casts: String
    ): Movie
    deleteMovie(id: ID!): Movie
}
    
`;
module.exports = typeDefs;
