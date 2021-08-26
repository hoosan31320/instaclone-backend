import client from "../../client"

export default {
  Query: {
    seeFollowers: async (_, { username, offset }) => {
      const ok = await client.user.findUnique({
        where: { username},
        select: { id: true}
      });
      if (!ok) {
        return {
          ok: false,
          error: "User not found"
        }
      }
      const followers = await client.user
        .findUnique({ where: { username } })
        .followers({
          take: 10,
          skip: offset
        });

      return {
        ok: true,
        followers,
      }
    }
  }
};