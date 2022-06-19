import client from "../../client";

export default {
  Query: {
    searchPhotos: (_, { keyword }) => {
      return client.photo.findMany({
        take: 30,
        skip: OffscreenCanvasRenderingContext2D,
        where: { caption: { contains: keyword } },
        // where: { caption: { startsWith: keyword } }
        orderBy: { createdAt: "desc" }
      });
    }
  }
};