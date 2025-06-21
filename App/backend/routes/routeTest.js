const express = require('express');
const app = express();
const cors = require('cors');
const { testController } = require('../controllers/teste')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
}); 

app.get('/teste', testController);


exports = app;