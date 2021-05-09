require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const PORT = process.env.PORT;
const server = new ApolloServer({
    schema,
    context: {
        token: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIwNTAxMzU2fQ.qysQXNV34v1WL7_nCBxxutD1bMsRVYqHO4FxglFJk4Y"
    }
});

server
    .listen(PORT)
    .then(() => 
        console.log(`Server is running on http://localhost:${PORT}`)
    );
