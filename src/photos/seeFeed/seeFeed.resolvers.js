import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeFeed: protectedResolver( async (_, { offset }, { loggedInUser }) => {
      const { following } = await client.user.findUnique({
        where: { id: loggedInUser.id },
        select: { following: true }
      });
      // https://github.com/JoonDong2/instagureng-backend/blob/master/src/api/Post/seeFeed/seeFeed.js
      const photoFirst = { photoId: 1 } ;

      return (following == null) ? photoFirst : client.photo.findMany({
        take: 30,
        skip: offset,
        where: { 
          user : { 
            id: {
              in: [...following.map(user => user.id), loggedInUser.id ]
            } 
          }
        },
        orderBy: { createdAt: "desc" },
      });
    })
  }
};
