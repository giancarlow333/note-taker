// import required packages
const express = require('express');
const path = require('path');
const theNotes = require('./db/db.json');

const PORT = 3001;
const app = express();
app.use(express.static('/public'));

// set up html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// set up API routes
app.get('/api/notes', (req, res) => 
    console.info(`GET /api/notes`);
    res.status(200).json(theNotes);
);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);