const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomhuhuhaha";

const app = express();

app.use(express.json());

const users = [];

function auth(req, res, next) {
  const token = req.headers.token;
  const decodeInformation = jwt.verify(token, JWT_SECRET); // will be the object you sent in jwt.sign()
  if (decodeInformation.username) {
    req.username = decodeInformation.username;
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }

  // const foundUser = users.find((u) => u.username == username);
  // req.user = foundUser;
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You have signed up",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find((u) => {
    if (u.username === username && u.password === password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    ); //convert username to jwt
    // foundUser.token = token; // NO NEED

    res.json({
      token: token,
    });

    console.log(users);
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.get("/me", auth, function (req, res) {
  // const token = req.headers.token;
  // const decodeInformation = jwt.verify(token, JWT_SECRET); // will be the object you sent in jwt.sign()
  // const username = decodeInformation.username;

  const foundUser = users.find((u) => u.username == req.username); // still have to find to get password
  // // only username gets stored with jwt

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3001);
