import express from "express";
import { ApolloServer } from "@apollo/server";

const app = express();

new ApolloServer({
    typeDefs: ``,
    resolvers: () => ({}),
})



app.listen(3000);
console.log("Server is running on port 3000");
