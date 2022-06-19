import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    makeRoom: protectedResolver(
      async (_, { userId }, { loggedInUser }) => {
        let room = null;
        const user = await client.user.findUnique({
          where: {
            id: userId,
          },
          select: {
            id: true,
          },
        });
        if (!user) {
          return {
            ok: false,
            error: "This user does not exist.",
          };
        }
        room = await client.room.create({
          data: {
            users: {
              connect: [
                {
                  id: userId,
                },
                {
                  id: loggedInUser.id,
                },
              ],
            },
          },
        });
        return {
          ok: true,
          id: room.id,
        };
      }
    ),
  },
};