import {gql} from "apollo-server";

export default gql`
    type Mutation {
        deleteNotification(id:Int!): MutationResponse!
    }
`;