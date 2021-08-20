import client from "../../client";

export default {
  Query: {
    searchPhotos: (_, { offset, keyword }) => {
      return client.photo.findMany({
        take: 15,
        skip: offset,
        where: { caption: { contains: keyword } },
        // where: { caption: { startsWith: keyword } }
        orderBy: { createdAt: "desc" }
      });
    }
  }
};