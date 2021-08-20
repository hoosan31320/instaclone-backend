import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    hashtags: ({ id }) =>
      client.hashtag.findMany({
          where: { photos: { some: { id } } }
      }),
    likes: ({ id }) => client.like.count({ where: { photoId: id } }),
    commentNumber: ({ id }) => client.comment.count({ where: { photoId: id } }),
    comments: ({ id }) => 
      client.comment.findMany({
        where: { photoId: id },
        include: { user: true }
      }),
    isMine: ({ userId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return userId === loggedInUser.id;
    },
    isLiked: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const ok = await client.like.findUnique({
        where: { photoId_userId: { photoId: id, userId: loggedInUser.id } },
        select: { id: true }
      })
      if (ok) {
        return true;
      }
      return false;
    },
    seeFeedFinalNo: async (_, { offset }, { loggedInUser}) => {
      const { following } = await client.user.findUnique({
        where: { id: loggedInUser.id },
        select: { following: true }
      });
      const seeFeedPhotos = await client.photo.findMany({
        where: { 
          user : { 
            id: {
              in: [...following.map(user => user.id), loggedInUser.id ]
            } 
          }
        }, 
      });
      const seeFeedFinalNo = [];
      for (var item of seeFeedPhotos) {
        const seeFeedPhotoIds = item.id;
        seeFeedFinalNo.push(seeFeedPhotoIds);
      }
      const minValue = Math.min(...seeFeedFinalNo);

      return minValue;
    }
  },
  Hashtag: {
    photos: ({ id }, { page }, { loggedInUser }) => {
      return client.hashtag
        .findUnique({ where: { id } })
        .photos();
    },
    totalPhotos: ({ id }) =>
      client.photo.count({
        where: { hashtags: { some: { id } } }
      })
  }
};