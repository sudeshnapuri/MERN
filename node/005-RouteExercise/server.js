// importing out packages
const express = require('express');
const cors = require('cors');

// initialising app as the express function
const app = express();

//common middleware
app.use(express.json());
app.use(cors());

//import the route into server,js
const highLightDemandRoutes = require('./routes/highLightDemandRoutes.js');
const lowLightDemandRoutes = require('./routes/lowLightDemandRoutes.js');

//tell server to use this route - use middleware to do this
app.use('/high', highLightDemandRoutes);
app.use('/low', lowLightDemandRoutes);


//making a new variable called server, equal to app listening on a port 5015
const server = app.listen(5015, () => {
    console.log(`Server started successfully on port ${server.address().port}`);
});