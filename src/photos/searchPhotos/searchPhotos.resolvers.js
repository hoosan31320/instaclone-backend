import client from "../../client";

export default {
  Query: {
    searchPhotos: (_, { keyword }) => {
      return client.photo.findMany({
        where: { caption: { contains: keyword.toLowerCase() } }
        // where: { caption: { startsWith: keyword } }
      })
    }
  }
};