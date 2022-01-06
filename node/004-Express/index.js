//import express package as a variable called express
const express = require('express');

//making a variable called app that is equal to express
const app = express();

//making a new variable called server, equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log("Hello world");
});