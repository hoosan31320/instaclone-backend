import client from "../../client";

export default {
  Query: {
    seeMyPhotos: (_, { username }) => {
      return client.user.findUnique({
          where: { username },
      }).photos();
    }
  }
};