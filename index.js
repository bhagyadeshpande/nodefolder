const express = require("express");
const os = require('os');
const fs = require('fs'); 
const app = express();

app.get("/",(req,res)=>{ 
  var fileName = ' ';
  fs.readdir("E:", (err, files) => { 
    if (err) 
      console.log(err); 
    else {          
      files.forEach(file => { 
        fileName+= "<img src='./images/folder.jpg'>"+file+"<br>";
      })   
      res.send(fileName);             
    } 
  })    
  });
app.listen(6500);
  


