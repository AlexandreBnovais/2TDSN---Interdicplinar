const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const routes = require('./src/routes/routes')
const PORT = process.env.PORT || 3000;

app.use(cors()); // Permite o react native acesse o backend
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
    try{
        console.log(`Server running on PORT ${PORT}`)
    }catch(error) {
        console.error('Error connect server', error);
    }
});
