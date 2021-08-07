import { gql } from "apollo-server";

export default gql`
  type Mutation {
    makeRoom(userId: Int): MutationResponse!
  }
`;