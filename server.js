// import required packages
const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT;
//const PORT = 3001;
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
  // Read existing data
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if(err) {
      console.log(err);
    }
    else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
  
  // Destructuring assignment for the items in req.body
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

    // Read existing data
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if(err) {
        console.log(err);
      }
      else {
        const existingNotes = JSON.parse(data);

        // Append the new note
        existingNotes.push(newNote);
        
        // String to write
        const noteString = JSON.stringify(existingNotes);

        // Write the string to a file
        fs.writeFile(`./db/db.json`, noteString, (err) => {
          if(err) {
            console.error(err)
          }
          else {
            console.log(`Note has been written to JSON file`);
            res.status(201).json(response);
            }
          }
        );
      }
    });
    console.log(response);
  } else {
    res.status(500).json('Error in posting note');
  }
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);