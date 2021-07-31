import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeFeed: protectedResolver( async (_, { offset }, { loggedInUser }) => {
      const { following } = await client.user.findUnique({
        where: { id: loggedInUser.id },
        select: { following: true }
      });
      const followingIds = following.map(user => user.id);
      
      // console.log(...following, "..............following.....")
      // console.log(followingIds, "...............followingIds...");
      // console.log(...followingIds, "............ffffollowingIds........");
      // const A = new Set(following);
      // https://github.com/JoonDong2/instagureng-backend/blob/master/src/api/Post/seeFeed/seeFeed.js

      return client.photo.findMany({
        take: 30,
        skip: offset,
        where: { 
          user : { 
            id: {
              in: [...followingIds, loggedInUser.id ]
            } 
          }
        },
        orderBy: { createdAt: "desc" },
      });
    })
  }
};
