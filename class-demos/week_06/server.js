// We did npm install express body-parser multer
// Import libraries
const express = require('express');
const parser = require('body-parser');
const urlEncoded = parser.urlencoded({extended: true});
const multer = require('multer');
const uploadProcessor = multer({dest: "public/images/"})

// Initializing express application
const app = express();


// Global array in our server to store all posts
let allPosts = [];
// Stores what number posts we have
let postNum = 0;

// Middleware, the stuff that happens in between initialization and listening.
// This specific line makes our entire folder "/public" accessible to the web.
app.use(express.static('public'))
app.use(urlEncoded);

// Can change the default route
// app.get('/', (req, res)=>{
//     res.sendFile(home.html)
// })

// Handle the post request coming in from the html file
app.post('/upload', uploadProcessor.single('theImage'), (req, res)=> {
    // Post requests store data coming in from the request body
    let postData = {
        title: req.body.title,
        caption: req.body.caption,
        postNumber: postNum
    }

    if(req.file) {
        postData.imgsrc = "/images/" + req.file.filename;
    }

    console.log(postData);
    // Adding individual post data to global data array.
    allPosts.push(postData);

    // Incrementing post number
    postNum++;

    // Once we stored the data, refresh back to home page.
    res.redirect('/')
})

allPosts.unshift(posts);

app.get('/all-posts', (req, res)=>{

})

// Set the app to listen for requests
app.listen(6001, ()=>{
    console.log("Server started at http://127.0.0.1:6001")
})