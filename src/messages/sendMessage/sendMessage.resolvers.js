import client from "../../client";
import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubsub";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        sendMessage: protectedResolver(
            async (_, { payload, roomId, userId }, { loggedInUser }) => {
                let room = null;
                if (userId) {
                    console.log(userId, "sendMessageResolver-userID");
                    const user = await client.user.findUnique({
                        where: { id: userId },
                        select: { id: true }
                    })
                    if (!user) {
                        return {
                            ok: false,
                            error: "This user does not exist"
                        }
                    }
                    room = await client.room.create({
                        data: { users: { connect: [ { id: userId },
                                                    { id: loggedInUser.id }
                        ]}}
                    })
                } else if (roomId) {
                    console.log(roomId, "sendMessageResolver-roomID");
                    room = await client.room.findUnique({
                        where: { id: roomId },
                        select: { id: true }
                    })
                    if (!room) {
                        return {
                            ok: false,
                            error: "Room not found"
                        }
                    }
                }
                const message = await client.message.create({
                    data: { payload, 
                            room: { connect: { id: room.id } },
                            user: { connect: { id: loggedInUser.id } }
                          }
                });
                console.log(message, "sendMessResolv-message");
                pubsub.publish(NEW_MESSAGE, { roomUpdates: { ...message } });
                console.log(message, "publish");
                return {
                    ok: true,
                    id: message.id
                }
            }
        )
    }
}