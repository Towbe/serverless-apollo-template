const { gql } = require('apollo-server-lambda');

// eslint-disable-next-line import/prefer-default-export
export const schema = gql`

extend type Query {
}

extend type Mutation {
}
`;
