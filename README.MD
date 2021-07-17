# Instaclone

<node version 14.15.5>
<npm version : 6.14.11>

Instaclone Backend.

npx prisma
migrate dev --name init
init Setup Prisma for your app
generate Generate artifacts (e.g. Prisma Client)
db Manage your database schema and lifecycle
migrate Migrate your database
studio Browse your data with Prisma Studio
format Format your schema

Generated Prisma Client (2.22.1) to .\node_modules\@prisma\client in 580ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient() ==> prisma 대신에 client 쓰고 있음.

{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjIwNTg3OTEwfQ.w-rKCZ2PEAgCIu5CQC5-MJYUOhh3d2U17H809LsVMtk"} : palyground 사용법

apollo-sever-express 사용시
http://localhost:4000/graphql

<Altair 사용시>
mutation ($avatar: Upload){
  editProfile(
  	avatar:$avatar){
ok
error
}
}

mutation($file: Upload) {
  uploadPhoto(
    file:$file,
caption:"Good Finns Photo") {
id
user{
username
}
caption
hashtags{
id
hashtag
}
}
}

<PostgreSQL pgAdmin4 명령어>
INSERT INTO "Hashtag" VALUES
(1, 'Photo', '2021-05-12 22:44:07.593', '2021-05-13 15:13:38.7')
;
UPDATE "Photo" SET hashtag='바뀔것' WHERE id=2;
DELETE FROM "Photo" WHERE id=1;

<db에 저장시 모든 문자 소문자로 바꾸기>

<Double underScore>
Here there are 2 variables unused, the first one is named _ and the second one __. With multiple unused variables it's common to name them _, __, ___ ... or _1,_2,_3...

<seePhotoComments에서 [Comment]의 User! Photo! 에러>
<subscription roomUpdates에서 Message의 Room! 에러>
-- subscription error 이유 가능.

http://localhost:4000/graphql

git config --global core.safecrlf false(window)
playground: true,
introspection: true,

<Jenkins EC2 자동배포 테스트>
.env 파일 처리는?
배포 테스트 - babel build 삭제
DATABASE_URL 에는 기호가 있으면 에러가 남.
ec2 방화벽을 초기에 활성화했음(sudo ufw allow or status).
젠킨스 테스트
excute shell 변경
pm2 test
npm install uuid(Need consoleLog from Jenkins)
ec2 npm install -g npm(npm version: 6.14.11 => 7.18.1 했음
=== 다시 npm version: 6.14.11 로 ====
======= but 아무 변화 없었음.
======= pm2 설정과 상관 없었음.

EC2 npm version : 7.18.1
<= uuid vesion을 높여야 한다고 jenkins가 알려줌
====== (but package.json 버젼8로 설치 여전히 uuid 버젼 3 error )
====== pm2 설정과 상관 없었음.
ec2 instance stop => ip 변경 => 젠킨스 깃웹훅 테스트2
jenkins auto deploy test-

## User:

- [ ] Create Account
- [ ] See Profile
- [ ] Login
- [ ] Edit Profile
- [ ] Change Avatar (Image Upload)
- [ ] Follow User
- [ ] Unfollow User
- [ ] Search Users
- [ ] See Followers
- [ ] See Following

## Photos

- [ ] See Photo
- [ ] Upload Photo
- [ ] Edit Photo
- [ ] Like / Unlike Photo
- [ ] See Photo Likes
- [ ] See Feed
- [ ] Search Photos
- [ ] See Hashtags

## Comments

- [ ] Comment on Photo
- [ ] Edit Comment
- [ ] Delete Comment

## Refactor

- [ ] Mutation Response

## Extra

- [ ] S3 Image Upload

<Execute Shell for EC2 pm2>
npm install
npm run build
sudo cp -r /var/lib/jenkins/workspace/instaclone-ubuntu /home/ubuntu/FromJenkins
cd /home/ubuntu/FromJenkins/instaclone-ubuntu
export BUILD_ID=dontKillMePlease    //pm2 위해 꼭 들어가야함*************
pm2 restart ecosystem.config.js --env production

## seeFeed user 찾는 방식 following에서 시작하기.

## postgesql 대소문자를 구별 못하는듯하다. 대문자로 db에 저장돼 있는 쿼리는 검색이 않돼는거 같음.
