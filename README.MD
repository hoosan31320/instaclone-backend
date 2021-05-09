# Instaclone

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

{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjIwNTg3OTEwfQ.w-rKCZ2PEAgCIu5CQC5-MJYUOhh3d2U17H809LsVMtk"}

apollo-sever-express 사용시
http://localhost:4000/graphql

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
