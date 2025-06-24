const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const routes = require('./src/routes/routes')
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    try{
        console.log(`Server running on PORT ${PORT}`)
    }catch(error) {
        console.error('Error connect server', error);
    }
});
