const bodyParser = require("body-parser");
const express = require("express");
const formidable = require("formidable");
const formidableMiddleware = require('express-formidable');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })



const app = express();






app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index", { FOO: "BAR" });
});

app.post("/", (req, res) => {
  console.log("in here");



  let form = new formidable.IncomingForm();

  form.parse(req);



  form.on("fileBegin", function (name, file) {
    file.path = __dirname + "/uploads/" + file.name;
  });

  form.on("file", function (name, file) {
    console.log("Uploaded file" + file.name);
  });




  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
