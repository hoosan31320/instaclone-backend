import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeChatRoom: protectedResolver( async (_, { userId }, { loggedInUser }) => {

      const myRooms = await client.user.findUnique({
        where: { username: loggedInUser.username }
      }).rooms();
      console.log(myRooms, ".............myRooms...");
      const userRooms = await client.user.findUnique({
        where: { id: userId }
      }).rooms();
      console.log(userRooms, "........userRooms.....");
      const myRoomsId = [];
      for( var item of myRooms ) { 
        const myRoomsIdFirst = item.id;
        myRoomsId.push(myRoomsIdFirst);
      } 
      
      const usersRoomsId = [];
      for( var item of userRooms ) { 
        const usersRoomsIdFirst = item.id;
        usersRoomsId.push(usersRoomsIdFirst);
      }  
      //https://soft91.tistory.com/84
      const CHAT_ROOM = myRoomsId.filter(x => usersRoomsId.includes(x));
      console.log(CHAT_ROOM, ".......CHAT_ROOM..........");
      const RoomId = CHAT_ROOM[0];
      const fakeRoom = {
        __typename: "Room",
        id: RoomId,
        unreadTotal: 0,
        users: [{
            __typename: "User",
            avatar: null,
            id: 1,
            username: "hoosan",
          },
          {
            __typename: "User",
            avatar: null,
            id: 4,
            username: "hoosan2",
          },
        ],
      }
      

      // https://aljjabaegi.tistory.com/312
      // const QUERY_RESULT = [];
      // for (const { id: nId } of myRooms) {
      //   const roomId = nId;
      //   console.log(roomId, "...............first roomId...........");
      //   function Afunc(obj) {
      //     console.log('id' in obj, ".............'id' in obj............");
      //     if ( 'id' in obj && roomId == CHAT_ROOM[0] ) {
      //       console.log(CHAT_ROOM[0], ".............CHAT_ROOM[0]........");
      //       console.log(roomId, "....................roomId...........");
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   } 
      //   const queryResult = myRooms.filter(Afunc);
      //   console.log(queryResult, "............queryResult......");
      //   QUERY_RESULT.push(queryResult);
      // }
      return fakeRoom;
    })
  }
};
