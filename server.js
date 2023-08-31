// import required packages
const express = require('express');
const path = require('path');
const theNotes = require('./db/db.json');

const PORT = 3001;
const app = express();
app.use(express.static('./public'));
app.use(express.json());

// set up html routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// set up API routes
app.get('/api/notes', function (req, res) {
  console.info(`GET /api/notes`);
  res.status(200).json(theNotes);
});

app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
  
  // Destructuring assignment for the items in req.body
  console.log(`Request body: ${req.body}`);
  const { title, text } = req.body;
  
  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text
    };
  
    const response = {
      status: 'success',
      body: newNote,
    };
  
    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting note');
  }
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);