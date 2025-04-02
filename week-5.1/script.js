// async function fetchPosts() {
//   console.log("before request");
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const json = await res.json();

//   document.getElementById("post").innerHTML = json.title;
// }

// fetchPosts();

const express = require("express");

const app = express();

// any a and b will be vaught w this syntax
app.get("/sum/:a/:b", function (req, res) {
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

app.listen(3000);
