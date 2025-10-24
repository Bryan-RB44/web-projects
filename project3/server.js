const express = require('express');
const app = express();

app.use(express.static('assets'))

app.listen(6001, ()=>{
    console.log("Server started at http://127.0.0.1:6001")
})