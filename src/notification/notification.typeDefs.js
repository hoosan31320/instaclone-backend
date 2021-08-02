import {gql} from "apollo-server";


export default gql`
    type Notification {
        id:        Int!
        payload:   String!
        user:      User!
        createdAt: String!
    }
`;