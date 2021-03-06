import resolvers from './resolvers';
import { schema } from './schema';

const { ApolloServer } = require('apollo-server-lambda');
const { buildFederatedSchema } = require('@apollo/federation');

const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs: schema,
    resolvers,
  }]),
  introspection: true,
  context: (opts, context) => {
    return opts.event.ctx;
  },
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
