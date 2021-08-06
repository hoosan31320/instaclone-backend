import client from "../client";

export default {
  Comment: {
    isMine: ({ userId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return userId === loggedInUser.id;
    },
    user: ({userId}) => {
      return client.user.findUnique({ where: { id: userId } });
    }
  }
};