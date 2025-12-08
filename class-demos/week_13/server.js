const express = require('express');
const parser = require('body-parser');
const multer = require('multer');
const nedb = require('@seald-io/nedb');
// NEW LIBRARIES
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');
const expressSession = require('express-session');
const nedbSessionStore = require('nedb-promises-session-store');
 
const encodeParser = parser.urlencoded({extended: true});
const uploadParser = multer({dest: 'public/upload'});
// Added database variable to keep track of the database file
let database = new nedb ({
    filename: 'database.txt',
    autoload: true
})
let userdb = new nedb ({
    filename: 'userdb.txt',
    autoload: true
})

// This connects the sessions from express to use out database
const nedbSessionInit = nedbSessionStore({
    filename: 'sessions.txt',
    connect: expressSession
})

const app = express();

// app.use is middleware
// this happens in between the app being set up and the routes that it recieves
app.use(express.static('public'));
app.use(encodeParser);
// Tells the app to be ready to recieve json data.
app.use(parser.json());

// NEW MATERIAL COOKIE PASRER MIDDLEWARE
// THIS ENABLES COOKIES TO BE TRACKED FROM THE SERVER
app.use(cookieParser());
// Tells the app to use sessions
app.use(expressSession({
    store: nedbSessionInit,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //Once a day before it expires

    },
    // Only allow my server to make changes to the session
    secret: 'supersecretcode123'
}))

app.get ('/', (req, res)=>{

    // If statement to check if cookie has been created
    // If not exist, then create it
    if(req.cookies.visits){
        // Convert string into a number
        // Cookies  automatically creates "visits":"1"
        let currentVisits = parseInt(req.cookies.visits);
        let addVisits = currentVisits + 1;
        let options = {
            expires: new Date( Date.now() + 1000000000000)
        }
        res.cookie("visits", addVisits, options);
    } else {
        // Create a cookie for the first time
        // 1st Param: Name of the key of the cookie
        // 2nd Param: Value we assign that key to
        // 3rd Param: Options, this allows us to specify when the cookie expires
        let randomTime = 1000 * 60 * 60 * 24; // One day
        let options = {
            expires: new Date( Date.now() + randomTime)
        }
        
        res.cookie("visits", 1, options);
    }
        // This should be the last line in the route handler
        res.sendFile('home.html', {root: "public"});
    
})

app.get('/visits', (req, res)=>{
    res.json(req.cookies);
})

app.post('/upload', uploadParser.single('imgUpload'), (req, res)=>{

    console.log(req.body);

    // Creates an object that keeps track of the time using the date class from the MDN documentation
    const currentTime = new Date(Date.now());

    console.log(currentTime);

    let data = {
        postText: req.body.text,
        postTime: currentTime.toLocaleString(),
        postTimestamp: currentTime,
        likes: 0 //Because we are adding a new property in the db, our old db items won't work, so we need to empty our db
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

app.post('/like', (req, res)=>{

    // Using bracket syntax like an array to retrieve this specific id for the cookie
    if (req.cookies[req.body.id]){
        res.redirect('/')
    } else {
        res.cookie(req.body.id, "Liked!", {expires: new Date(Date.now()+1000000)})

        let query = {
            _id: req.body.id
        }
        let update = {
            // Rule in which we are updating a particular item in the db
            // @inc increases a value by the specific property and amount
            $inc: {likes: 1}
        }
        //Refresh the page you're currently on
        database.update(query, update, {}, ()=>{
            res.redirect('/');
        })
    }
})

app.get('/register', (req, res)=>(
    res.redirect('/')
))

app.post('/signup', (req, res)=>{
    let username = req.body.username;
    let password = bcrypt.hashSync(req.body.password, 10)
    let newUser = {
        user: username,
        pass: password
    }
    userdb.inset(newUser, ()=>{
        res.redirect('/register')
    })
});

app.get('/login', (req, res)=>{
    res.sendFile('login.html', {root: 'public'})
})

app.post('/authenticate', (req, res)=>{
    let searchedUser = {
        user: req.body.username,
    }
    userdb.findOne(searchedUser, (err, foundUser)=>{
        if(err || foundUser == null){
            res.redirect('/login?user=notFound')
        } else {
            // User found, now check password
            if(bcrypt.compareSync(req.body.password, foundUser.pass)){
                let session = req.session; // Retrieve the session that exists on the request
                session.loggedInUser = foundUser.user; // Set the logged in user to be the successful log in username
                res.redirect('/?login=success')
            } else {
                res.redirect('/login?password=invalid')
            }
        }
    })
})

app.listen(6004, ()=>{
    console.log('app is listening on port 6004 or localhost:6004');
})