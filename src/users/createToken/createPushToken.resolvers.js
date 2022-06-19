import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async(_, { pushToken }, {loggedInUser}) => {
  try{
    const updatedUser = await client.user.update({
      where: {
        id: loggedInUser.id
      },
      data: {
        pushToken
      }
    });
    if (updatedUser.id) {
      return {
        ok: true
      };
    }
  } catch (e) {
    return {
      ok: false,
      error: "Can't create pushToken"
    }
  }
};

export default {
    Mutation: {
        createPushToken: protectedResolver(resolverFn)
    }
}