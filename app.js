const express = require('express');
const bodyParser = require('body-parser');
let {PythonShell} = require('python-shell')

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("gym1");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/product",function(req,res){
    res.render("product");
});
app.get("/gym2",function(req,res){
  res.render("gym2");
})
app.get("/service",function(req,res){
    res.render("service");
});
app.get('/back', function (req, res, next) {
  
  res.redirect("/");
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server started  on port  3000");
})
app.post("/",function(req,res){
	let pyshell = new PythonShell('main.py');
	pyshell.send(req.body.hi);

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)

  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
});

	res.render('gym2');
});