const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
var items=[];
var workList=[];

app.get("/", function(req, res) {

  var today = new Date();
  var getday = today.getDay();
  var options={
    weekend:"long",
    day:"numeric",
    month:"long"
  };
  var day=today.toLocaleString("en-US",options);
  res.render('views',{listTitle:day,listItems:items});
});

app.post("/",function(req,res){
  // console.log(req.body.newItem);
  let item=req.body.newItem;
  if(req.body.list==="Work")
  {
    workList.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
      res.redirect("/");
  }



});

app.get("/work",function(req,res){
  res.render('views',{listTitle:"Work",listItems:workList})
});

// app.post("/work",function(req,res){
//   let item=req.bdy.newItem;
//   // workList.push(item);
//   // res.redirect("/work");
// });
app.listen(3000, function() {
  console.log("App is running on port 3000");
});
