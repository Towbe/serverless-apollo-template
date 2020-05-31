const { gql } = require('apollo-server-lambda');

// eslint-disable-next-line import/prefer-default-export
export const schema = gql`

    scalar JSON

extend type Query {
    asdf: String
}

extend type Mutation {
    eedds: String
}
`;
