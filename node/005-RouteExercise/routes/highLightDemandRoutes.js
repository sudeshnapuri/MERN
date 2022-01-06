//this file will be concerned with the routes for my high light demand houseplants

//importing in the router function of the express object
const router = require('express').Router();

//all of our routes go below and use router rather than app

//Read all request
router.get("/readAll", (req, res) => {
    console.log("read all accessed");
    res.status(202).send("read all accessed");
});

//Create request
router.post('/newPlant', (req) => {
    console.log("new plant created");
    const body = req.body;
    console.log(body);
    res.status(201).send("new plant created");
});

//Delete request
router.delete('/delete/:id', (req) => {
    console.log(req.params.id);
    res.status(202).send("plant has been deleted");
});

//Update request
router.put('/update/:id', (req) => {
    console.log(req.params);
    console.log(req.body);
    res.status(201).send("plant has been updated");
});


//Export our router for server.js to use
module.exports = router;