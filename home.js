const express= require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/customerDB",{useNewUrlParser : true});

const customerSchema = {
    name : String,
    mail : String,
    number : String,
    messege: String
}

const Custoner = mongoose.model("Custoner",customerSchema);

// const c1  = new Custoner({
//     name : "Soumya",
//     mail : "123@",
//     number :"123",
//     messege : "HI"
// });


app.get("/", function(req,res) {
       res.sendFile(__dirname + "/index.html");
});




app.post("/",function(req,res) {
    const nme = req.body.txtName;
    const mail = req.body.txtEmail;
    const mobile = req.body.txtPhone;
    const messege = req.body.txtMsg;
    // console.log(name);
    // console.log(mail);
    // console.log(mobile);
    // console.log(messege);
    const user = new Custoner({
     name : nme,
     mail: mail,
     number : mobile,
     messege:messege

    });
    user.save(function(err, result){
       if(err){
        console.log(err);
       }else {
        res.send("messege send successfully");
       }
    });
    
});










app.listen(3000,function(){
    console.log("server is running");
});