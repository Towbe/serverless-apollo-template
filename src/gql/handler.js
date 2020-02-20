import fs from "fs";
import resolvers from './resolvers';

const { ApolloServer, gql } = require('apollo-server-lambda');
const { buildFederatedSchema } = require('@apollo/federation');
import { schema } from './schema';

const context = require('./context').default;

const server = new ApolloServer({
    schema: buildFederatedSchema([{
        typeDefs: schema,
        resolvers,
    }]),
    context,
    introspection: true,
});

exports.graphqlHandler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});
