const express = require("express");

const app = express();

let requestCount = 0;

function reqCounter(req, res, next) {
  requestCount += 1;
  console.log(`Method is: ${req.method}`);
  console.log(`Route is: ${req.url}`);
  console.log(`Number of requests made: ${requestCount}`);
  next();
}

app.use(reqCounter);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.listen(3001);
