import structures from './structures';
import { GraphQLScalarType } from 'graphql';
import queries from './queries';
import mutations from './mutations';

const resolvers = {
    ...structures,
    Query: queries,
    Mutation: mutations,
};

exports.resolvers = resolvers;

