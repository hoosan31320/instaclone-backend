import {gql} from "apollo-server";

export default gql`
  type Mutation {
    createPushToken( pushToken: String): MutationResponse!
  }
`;