const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json('test ok');
});

app.post('/api/transaction', (req, res) => {
    const { name, description, datetime } = req.body;
    res.json({ name, description, datetime });
});

app.listen(4000);

