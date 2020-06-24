const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.json({type:'application/*+json'}))

const publicDir = './public';
app.get('/home',(req,res)=> {
    res.sendFile(path.join(__dirname,publicDir+'/home.html'));
})

app.get('/fileUpload',(req,res)=> {
    
    res.send('file uploaded successfully!!');
})

app.listen(8000,()=>{
    console.log("server listening at port 8000"); 
})