import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        uploadPhoto: protectedResolver(
            async (_, { file, caption }, {loggedInUser }) => {
                if (caption) {
                    /// parse caption
                    // get or create Hashtags
                    const hashtags = caption.match(/#[\w]+/g);
                }
                // save the photo With the parsed hashtags
                // add the photo to the hashtags
                client.photo.create({
                    data: { 
                        file, 
                        caption, 
                        hashtags: {
                            connectOrCreate: [
                                { where: { hashtags: "#food" },
                                  create: { hashtags: "#food" }
                                }
                            ]
                        }
                    }
                })
            }
        )
    }
}