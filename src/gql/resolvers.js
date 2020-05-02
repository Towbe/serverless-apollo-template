import queries from './queries';
import mutations from './mutations';
import GraphQLJSON from 'graphql-type-json';

const resolvers = {
  Query: queries,
  Mutation: mutations,
  JSON: GraphQLJSON
};

export default resolvers;
