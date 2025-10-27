// Importing my library
const express = require('express');
// Initializing library
const app = express();

const path = require('path');
// fs = filesystem module (from Node.js)
const fs = require('fs');

// Middleware
app.use(express.static('assets'))
// Handling JSON
app.use(express.json());

// Storing the data file in the project directory
const dataFile = path.join(__dirname, 'posts.json');

// Making sure the file exists
if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, JSON.stringify([]));

// ----ROUTING SECTION----
// Getting all of the posts
app.get('/api/posts', (req, res) => {
    const posts = JSON.parse(fs.readFileSync(dataFile));
    res.json(posts);
});
// Adding new posts
app.post('/api/posts', (req, res) => {
    console.log("Received POST /api/posts", req.body);

    const { name, game, text } = req.body;

    // Preventing posts without game titles
    if (!game) return res.status(400).json({ error: 'Game title is required' });

    const posts = JSON.parse(fs.readFileSync(dataFile));
    const newPost = {
        // Using id's via time just to text out how it shows up in the json
        id: Date.now(),
        name,
        game,
        text
    };
    posts.push(newPost);
    fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
    res.json(newPost);
});


// Setting up app to listen for requests
app.listen(6001, ()=>{
    console.log("Server started at http://127.0.0.1:6001")
})