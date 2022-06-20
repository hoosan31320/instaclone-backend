<2021-07-29 아마 delete시 cascade 같은거 문제인듯 - Me.js에서 photo 삭제시에 에러가 났음.(like 없는 사진에서는 에러 없음) >
"message": "The change you are trying to make would violate the required relation 'LikeToPhoto' between the `Like` and `Photo` models.",
===>
model Like {
id Int @id @default(autoincrement())
photo Photo @relation(fields: [photoId], references: [id])
user User @relation(fields: [userId], references: [id])
photoId Int
userId Int
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
@@unique([photoId, userId])
}
==>
photo Photo? @relation(fields: [photoId], references: [id])
user User @relation(fields: [userId], references: [id])
photoId Int?
(변경하기 후에 npm run migrate && 예전 like data 수동으로 삭제후 photo 삭제)

https://dev.to/pedrovrima/cascade-deleting-in-prisma-v2-apj
https://www.prisma.io/docs/concepts/components/prisma-client/crud#delete

PRISMA2 DELETE CASCADE ===> @paljs/plugin
https://kosaf04pyh.tistory.com/337
https://paljs.com/plugins/delete/

<SeeFeed 수정 - Joons Lab>
https://github.com/JoonDong2/instagureng-backend/blob/master/src/api/Post/seeFeed/seeFeed.js

<<<node version 14.15.5 계속 유지 >>>
<<<npm version : 6.14.11 계속 유지>>> 
npmV6 브랜치에서 진행.
DB, SERVER 다 heroku에서 진행 시작.

<Heroku node.js npm 설정 - nodejs 14.15.5>

<heroku buildpacks -a instaclone-nodejs>

<connect New app to Old DB> again  

<New Server and New DB> again

<PlayGround 보호>
You can use CORS to only allow one domain to send requests to your api. https://www.npmjs.com/package/helmet

<Push token 변경 - 기기가 바뀌면 토큰을 바꿔준다, 다른 user도 내 토큰을 쓰고 있을때 사용자에게 알려줄 방법
error 처리 이외의 방법으로 사용자에게 알려준다. - 알려줄 수 있는 resolver를 다시 만드는 방법이 있을듯 >

const myRooms = await client.user.findUnique({
where: { username: loggedInUser.username }
}).rooms();
console.log(myRooms, ".............myRooms...");

      const userRooms = await client.user.findUnique({
        where: { id: 2 }
      }).rooms();
      console.log(userRooms, "........userRooms.....");
      for(let i = 0; i < myRooms.length; i++ ){
        myRooms[i];
        console.log(myRooms[i], "............myRooms[i]............");
        return myRooms[i];
      }
