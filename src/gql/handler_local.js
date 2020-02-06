import fs from 'fs';
import resolvers from './resolvers';
const { ApolloServer, gql } = require('apollo-server');
const AWS = require('aws-sdk');
const {makeExecutableSchema} = require('@apollo/federation');

AWS.config.update({
  region: process.env.LAWS_REGION,
});
const schema = gql(fs.readFileSync('./schema.graphql', 'utf-8'));

const context = require('./context').default;

const server = new ApolloServer({
  schema: makeExecutableSchema([
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
