const express = require('express');
const app = express();
const cors = require('cors');
const { testController } = require('./controllers/teste');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
}); 

app.get('/teste', testController);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`O servidor esta sendo executado na porta ${PORT}`)
})
