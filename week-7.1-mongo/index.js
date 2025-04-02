const { UserModel, TodoModel } = require("./db");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const app = express();
const JWT_SECRET = "bgusbgubgursbousguvnfdnbosjdnboisr";
mongoose.connect(
  "mongodb+srv://dhavitg:ZRFpS2dtZt%21GSDV@cluster0.rhpde.mongodb.net/todo-app-database"
);

app.use(express.json());

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
}

app.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(3).max(30),
    name: z.string().min(3).max(50),
  });

  // const parsedData = requiredBody.parse(req.body);
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect Format",
      error: parsedDataWithSuccess.error,
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  let errorThrown = false;

  try {
    const hashedPassword = await bcrypt.hash(password, 3); //await because promise is returned which will have the data

    await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
  } catch (e) {
    res.json({
      message: "User already exists",
    });

    errorThrown = true;
  }

  if (!errorThrown) {
    res.json({
      message: "You have signed up",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/todo", auth, function (req, res) {
  const userId = req.userId;

  res.json({
    userId: userId,
  });
});

app.get("/todos", auth, function (req, res) {
  const userId = req.userId;

  res.json({
    userId: userId,
  });
});

app.listen(3000);
