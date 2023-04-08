const express = require('express');
const cors = require('cors');
//const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// require('crypto').randomBytes(64).toString('hex')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());






app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log(` server running on ${port}`);
})