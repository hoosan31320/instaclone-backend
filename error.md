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

<PlayGround 보호>
You can use CORS to only allow one domain to send requests to your api. https://www.npmjs.com/package/helmet
