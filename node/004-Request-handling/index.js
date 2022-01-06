//import express package as a variable called express
const express = require('express');
const cors = require("cors");

//making a variable called app that is equal to express
const app = express();

//needed to parse JSON data so express can read it
app.use(express.json());
// cors will prevent any unwanted cors errors
app.use(cors());

// A basic get request to return a console log
// app.METHOD("/path", whatRequestDoes() (as an arrow function))
app.get("/hello", () => {
    return console.log("site accessed!");
});

app.delete("/delete", () => {
    return console.log("Deleted item!");
});

app.post("/post", () => {
    return console.log("Updated item!");
});

app.put("/put", () => {
    return console.log("Created item!");
});

//Middleware
app.use((req, res, next) => {
    console.log(new Date);
    next();
});

//Nested Middleware - added to get request
const nested = (req, res, next) => {
    console.log("nested");
    next();
}


//Delete request
app.delete('/delete/:id', (req) => {
    console.log(req.params.id);
});

//Delete response
app.delete('/delete/:id', (req, res) => {
    res.status(202).send("item has been deleted");
});

//Get request - added nested middleware
app.get('/get', nested, (req) => {
    console.log(req.query.id);
});

// Get response
app.get('/get/:name' , (req, res) => {
    const name = req.params.name;
    res.status(202).send(`The item is called ${name}`);
});

//Create request
app.post('/newPlant', (req) => {
    console.log("=======");
    const body = req.body;
    console.log(body);
});

//Create response
app.post('/newPlant', (req) => {
    res.status(201).send("item has been created");
});

//Update request
app.put('/update/:id', (req) => {
    console.log(req.params);
    console.log(req.body);
});

//Update response
app.put('/update/:id', (req) => {
    res.status(201).send("item has been updated");
});


// Move app listening function to the bottom
//making a new variable called server, equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log("Hello world");
});