import { gql } from "apollo-server";

export default gql`
  type Query {
    seeChatRoom(userId: Int!): Room
  }
`;