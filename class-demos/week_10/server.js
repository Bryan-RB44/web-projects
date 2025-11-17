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

app.get('/', (req, res)=>{
    res.send('index.html', {root: 'public'})
})
app.post('/upload', uploadParser.single('imgUpload'), (req, res)=>{

    console.log(req.body);

    let data = {
        postText: req.body.text,
        postTime: Date.toLocaleString(),
        postTimestamp: Date.now()
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

app.listen(6004, ()=>{
    console.log('app is listening on port 6004');
})