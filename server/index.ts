import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

    type Book {
        title: String
        Author: String
    }
    type Query {
        books: [Book]
    }
`;

const books = [
  { title: "The Awakening", author: "Kate Chopin" },
  { title: "City of Glass", author: "Paul Auster" },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`Server ready at ${url}`);
