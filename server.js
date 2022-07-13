const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use(express.static('client/build'));

app.get('/api/ma-seance-cine', (req, res) => {
    res.send({
        msg: "Bonjour !"
    });
});

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});