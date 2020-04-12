import resolvers from './resolvers';
import { schema } from './schema';

const { ApolloServer } = require('apollo-server');
const AWS = require('aws-sdk');
const { buildFederatedSchema } = require('@apollo/federation');

AWS.config.update({
  region: process.env.LAWS_REGION,
});

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: schema,
      resolvers,
    },
  ]),
});

server.listen({
  port: 5000,
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
