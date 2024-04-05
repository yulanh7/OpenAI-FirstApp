const express = require('express');
const cors = require('cors');

const { generateMeta, generateImage } = require('./controllers/openaiController');

const app = express();
app.listen(4000, () => console.log('listening to requests on port 4000'));

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/openai/meta', generateMeta);
app.post('/openai/image', generateImage);
