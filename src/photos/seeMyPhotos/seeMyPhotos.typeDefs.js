import { gql } from "apollo-server";

export default gql`
  type Query {
    seeMyPhotos(username: String!): [Photo]
  }
`;