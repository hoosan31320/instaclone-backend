import client from "../../client";

export default {
  Query: {
    searchPhotos: (_, { offset }, { keyword }) => {
      return client.photo.findMany({
        take: 120,
        skip: offset,
        where: { caption: { contains: keyword } },
        // where: { caption: { startsWith: keyword } }
        orderBy: { createdAt: "desc" }
      });
    }
  }
};