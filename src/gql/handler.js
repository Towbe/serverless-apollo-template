const { ApolloServer } = require('apollo-server-lambda');

const { resolvers } = require('./resolvers');
const { schema } = require('./schema');

const context = require('./context').default;

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context,
    introspection: true,
});

exports.graphqlHandler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});
