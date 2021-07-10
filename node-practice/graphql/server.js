var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// construct a schema using GraphQL schema language
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);