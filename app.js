const express = require("express");
const bodyParser = require("body-parser");
const request = require("request"); 

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.post("/", (req,res) =>{
    const firstName = req.body.inputFname;
    const lastName = req.body.inputLname;
    const mail = req.body.inputMail;

    console.log(firstName,lastName,mail);

    
});

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000!");
});