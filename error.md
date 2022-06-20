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

#####################################################
 ~/instaclone-backend  main !2  npm install

> instaclone@1.0.0 preinstall /home/hoosan/instaclone-backend
> npx npm-force-resolutions

npx: installed 6 in 6.214s

> prisma@2.22.1 preinstall /home/hoosan/instaclone-backend/node_modules/prisma
> node scripts/preinstall-entry.js


> bcrypt@5.0.1 install /home/hoosan/instaclone-backend/node_modules/bcrypt
> node-pre-gyp install --fallback-to-build

[bcrypt] Success: "/home/hoosan/instaclone-backend/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node" is installed via remote

> prisma@2.22.1 install /home/hoosan/instaclone-backend/node_modules/prisma
> node scripts/install-entry.js


> @prisma/engines@2.22.0-21.60cc71d884972ab4e897f0277c4b84383dddaf6c postinstall /home/hoosan/instaclone-backend/node_modules/@prisma/engines
> node download/index.js


> core-js@3.12.0 postinstall /home/hoosan/instaclone-backend/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.12.0 postinstall /home/hoosan/instaclone-backend/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"


> @apollo/protobufjs@1.2.2 postinstall /home/hoosan/instaclone-backend/node_modules/@apollo/protobufjs
> node scripts/postinstall


> @prisma/client@2.22.1 postinstall /home/hoosan/instaclone-backend/node_modules/@prisma/client
> node scripts/postinstall.js

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (2.22.1) to ./node_modules/@prisma/client in 837ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client
```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

> aws-sdk@2.906.0 postinstall /home/hoosan/instaclone-backend/node_modules/aws-sdk
> node scripts/check-node-version.js


> nodemon@2.0.7 postinstall /home/hoosan/instaclone-backend/node_modules/nodemon
> node bin/postinstall || exit 0

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 860 packages from 697 contributors and audited 865 packages in 114.951s

58 packages are looking for funding
  run `npm fund` for details

found 43 vulnerabilities (14 moderate, 26 high, 3 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

###############################################################
 <<<  ~/instaclone-backend  main  npm audit fix   >>>
npm WARN deprecated graphql-tools@4.0.8: This package has been deprecated and now it only exports makeExecutableSchema.\nAnd it will no longer receive updates.\nWe recommend you to migrate to scoped packages such as @graphql-tools/schema, @graphql-tools/utils and etc.\nCheck out https://www.graphql-tools.com to learn what package you should use instead
npm WARN deprecated subscriptions-transport-ws@0.9.19: The `subscriptions-transport-ws` package is no longer maintained. We recommend you use `graphql-ws` instead. For help migrating Apollo software to `graphql-ws`, see https://www.apollographql.com/docs/apollo-server/data/subscriptions/#switching-from-subscriptions-transport-ws    For general help using `graphql-ws`, see https://github.com/enisdenjo/graphql-ws/blob/master/README.md
npm WARN deprecated graphql-extensions@0.15.0: The `graphql-extensions` API has been removed from Apollo Server 3. Use the plugin API instead: https://www.apollographql.com/docs/apollo-server/integrations/plugins/
npm WARN deprecated apollo-tracing@0.15.0: The `apollo-tracing` package is no longer part of Apollo Server 3. See https://www.apollographql.com/docs/apollo-server/migration/#tracing for details
npm WARN deprecated apollo-cache-control@0.14.0: The functionality provided by the `apollo-cache-control` package is built in to `apollo-server-core` starting with Apollo Server 3. See https://www.apollographql.com/docs/apollo-server/migration/#cachecontrol for details.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ apollo-server@2.25.4
added 27 packages from 34 contributors, removed 14 packages, updated 14 packages and moved 1 package in 39.993s

59 packages are looking for funding
  run `npm fund` for details

fixed 34 of 43 vulnerabilities in 865 scanned packages
  2 vulnerabilities required manual review and could not be updated
  3 package updates for 7 vulnerabilities involved breaking changes
  (use `npm audit fix --force` to install breaking changes; or refer to `npm audit` for steps to fix these manually)