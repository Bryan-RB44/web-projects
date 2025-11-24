const express = require('express');
const parser = require('body-parser');
const multer = require('multer');
const nedb = require('@seald-io/nedb');

// 
const encodeParser = parser.urlencoded({extended: true});
const uploadParser = multer({dest: 'public/upload'});
// Added database variable to keep track of the database file
let database = new nedb ({
    filename: 'database.txt',
    autoload: true
})

const app = express();

// app.use is middleware
// this happens in between the app being set up and the routes that it recieves
app.use(express.static('public'));
app.use(encodeParser);
// Tells the app to be ready to recieve json data.
app.use(parser.json());

app.get('/', (req, res)=>{
    res.send('index.html', {root: 'public'})
})
app.post('/upload', uploadParser.single('imgUpload'), (req, res)=>{

    console.log(req.body);

    // Creates an object that keeps track of the time using the date class from the MDN documentation
    const currentTime = new Date(Date.now());

    console.log(currentTime);

    let data = {
        postText: req.body.text,
        postTime: currentTime.toLocaleString(),
        postTimestamp: currentTime
    }

    // 2 params for insert()
    // 1. data to be added
    // 2. callback for after the data has been added

    database.insert(data, (err, dataToBeAdded)=>{
        if(err) {
            res.redirect('/')
        } else {
            console.log(dataToBeAdded);
            res.redirect('/');
        }
    })

    // res.redirect('/')
})

// Create a new request to retrieve info from the database
app.get('/populatePosts', (req, res)=>{
    // This should retrieve info
    // 1. What are we looking for inside the database
    // nedb takes in an object to look for
    // empty {} means we want to retrieve the entire database
    let query = {};

    database.find(query, (err, data) =>{
        // console.log(data);

        // We are sending a json response so our front-end main.js can parse it
        res.json(data);
    });
})

// This will take in data from my main.js and delete a specific post in the database
app.delete('/delete', (req, res)=>{
    // console.log(req.body.id);

    // based on nedb, we construct a search will match the _id property inside of the db to the id that comes in from the client
    let query = {
        _id: req.body.id
    }

    // find ONE thing
    // database.findOne(query, (err)=>{
    //     console.log(data);
        
    // })
    database.remove(query, {}, (err, numRemoved)=>{
        console.log(numRemoved);
        res.redirect('/');
    })
})

app.listen(6004, ()=>{
    console.log('app is listening on port 6004');
})