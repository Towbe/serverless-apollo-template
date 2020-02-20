import { GraphQLScalarType } from 'graphql';
import queries from './queries';
import mutations from './mutations';

const resolvers = {
    Query: queries,
};

export default resolvers;

