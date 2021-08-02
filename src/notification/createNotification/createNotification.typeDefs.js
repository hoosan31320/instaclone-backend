import {gql} from "apollo-server";

export default gql`
    type Mutation {
        createNotification(userId:Int!, payload:String!): MutationResponse!
    }
`;