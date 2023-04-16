var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true); next();
});

const port = 3005;

app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
  });

app.get('/getId', function(req,res){
    console.log(req.query);
    let users = JSON.parse(fs.readFileSync('data.JSON','utf-8'));
    for (const person of users) {
      if(req.query.login===person.login&&req.query.password===person.password){
        res.send(`${person.id}`);
        return;
      }
    }
    res
      .status(401)
      .send('Unauthorized');
});

app.get('/getGoods', function(req,res){
  console.log(req.query, 'query getGoods');
  let goods = fs.readFileSync(`usersData/user${req.query.id}.json`,'utf-8');
  console.log(typeof goods, 'goods');
  res.send(goods);
});