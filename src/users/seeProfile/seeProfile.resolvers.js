import client from "../../client";

export default {
    Query: {
        seeProfile: (_, { username }) =>
            client.user.findUnique({
                where: {
                    username
                },
                // if include not, data of following or followers are null
                include: {
                    following: true,
                    followers: true
                }
            })
    }
};