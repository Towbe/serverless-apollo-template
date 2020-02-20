import fs from 'fs';
import resolvers from './resolvers';
const { ApolloServer, gql } = require('apollo-server');
const AWS = require('aws-sdk');
const { buildFederatedSchema } = require('@apollo/federation');

AWS.config.update({
  region: process.env.LAWS_REGION,
});
import { schema } from './schema';

const context = require('./context').default;

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: schema,
      resolvers,
    }
  ])
});

server.listen({
  port: 5000,
    }
).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
