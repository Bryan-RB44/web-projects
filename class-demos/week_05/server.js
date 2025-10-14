// Import express library
// 1. We always import libraries first
const express = require('express');

// 2. Initialize libraries
const app = express();

// 3. middleware
// Stuff that happens between initialization and app listen.
app.use(express.static('assets'));

// 3.1 Global variables for storage
let allNotes = [];


// 4. All of my routing
// This determines what responses the server gives based on what requests come in
app.get('/', (request, response)=> {
    response.send('Server is working!');
})

// app.get('/guestbook', (req, res)=>{
//     res.sendFile()
// })

app.get('/submit', (req, res)=> {
    console.log(req.query);

    // Local variables
    let user = req.query.guest; // Grabs the guest from the form data name="date"
    let message = req.query.note; // Grabs the note from the form data name="note"
    let time = Date(Date.now()).toLocaleString(); // Create a new date string at the now time

    const messageData = {
        username: user,
        message: message, 
        date: time,
    }

    allNotes.push(messageData);

    // res.send("Thank for submitting, " + user);
    res.redirect('/')
})
app.get('/all-messages', (req, res)=>{
    let messageString = ''; // Creates a local variable string to use to send to client
    
    // Use a loop to go through the entire notes array
    // Shorthand for a regular for loop. Useful for an array of objects
    for (let n of allNotes){
        messageString += '<h3>' + n.username + "</h3>" + ' says ' + n.message + '<br />';
    };

    // res.send(messageString);
    // We are no longer sending a string, we're sending a json object
    // It's tedious to write html as a string
    res.json({notes: allNotes});
})

// 5. Set the app to listen to requests
// ALWAYS GOES LAST!!!
app.listen(3001, ()=>{
    console.log("Server running on http://127.0.0.1:3001");
})