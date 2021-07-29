import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { PrismaDelete } from '@paljs/plugins';

export default {
  Mutation: {
    deletePhoto: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const prismaDelete = new PrismaDelete(client);
      await prismaDelete.onDelete({ model: "Photo", where: { id } });
      const photo = await client.photo.findUnique({
        where: { id },
        select: { userId: true }
      })
      if (!photo) {
        return {
          ok: false,
          error: "Photo not found"
        }
      } else if (photo.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "Not authorized"
        }
      } else {
        await client.photo.delete({
          where: { id }
        })
        return {
          ok: true
        }
      }
    })
  }
}