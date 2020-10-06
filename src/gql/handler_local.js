import resolvers from './resolvers';
import { schema } from './schema';

const { ApolloServer } = require('apollo-server');
const AWS = require('aws-sdk');
const { buildFederatedSchema } = require('@apollo/federation');

AWS.config.update({
  region: process.env.AWS_REGION,
});

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: schema,
      resolvers,
    },
  ]),
  context: (context) => ({
    ...context,
    user: {
      email: 'test+ali@towbe.com',
      first_name: 'Test',
      last_name: 'Dispatcher',
      organization: 'Test Org',
      uid: 'DDRLCuxylQU5KEXrdrZOIYHKpLI3',
    },
  }),
});

server.listen({
  port: 5000,
}).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
