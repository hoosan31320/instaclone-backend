import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeRoom: protectedResolver((_, { id }, { loggedInUser }) => 
      client.room.findFirst({
          where: { id, //messageId
                   users: { some: { id: loggedInUser.id } } 
                  }
      })
    )
  }
}