const express = require('express');
const cors = require('cors');
// require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())


const codechef = require('./codechef.js');
app.use('/codechef', codechef);

app.listen(5000,() =>{
    console.log('server is running on port 5000');
});