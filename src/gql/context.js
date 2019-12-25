import { ApolloServer } from "apollo-server";
import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.LAWS_REGION,
});

const { resolvers } = require('./resolvers');
const { schema } = require('./schema');

const context = require('./context').default;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
