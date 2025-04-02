const express = require("express");

const app = express();

// function that returns a boolean

/////////////////////////////
// WITHOUT MIDDLEWARES
/*
function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully been riding on ride1",
    });
  } else {
    res.status(411).json({
      msg: "Sorry you are not old enough",
    });
  }
});

app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully been riding on ride2",
    });
  } else {
    res.status(411).json({
      msg: "Sorry you are not old enough",
    });
  }
});
*/

// singular middleware use: app.get("/ride1", isOldEnoughMiddleware, function (req, res)

// if the middleware is used in every route call,
app.use(isOldEnoughMiddleware);

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry you are not old enough",
    });
  }
}

app.get("/ride1", function (req, res) {
  res.json({
    msg: "You have successfully been riding ride1",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have successfully been riding ride2",
  });
});

app.listen(3004);
