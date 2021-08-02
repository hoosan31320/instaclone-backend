import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async(_, __, {loggedInUser}) => {
    return await client.notification.findMany({
        where: {
            userId: loggedInUser.id
        },
        orderBy: {
            createdAt: "desc"
        },
    });
};

export default {
    Query: {
        seeNotification: protectedResolver(resolverFn)
    }
}