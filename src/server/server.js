const express = require('express');
const app = express();
var path = require('path');
//Dependencies
const bodyParser = require("body-parser")
//Middleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

//GET route
app.get('/', (req,res) =>{
    res.sendFile(path.resolve('./dist/index.html'));
});

//Initializing the main project folder
app.use(express.static('dist'));
app.use(express.static('public'));

const port = 3000;
//Spin up the server
const server = app.listen(port, listening);

function listening(){
    console.log(`running on localhost: ${port}`);
};