const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require("./../schema/schema");

const app = express();
const PORT = 3005;

app.use("/graphql", graphqlHTTP({schema, graphiql:true}));
// app.all('/graphql', createHandler({schema, graphiql:true}));

app.listen(PORT, err=>{
    err ? console.log(err) : console.log("Server started")
})