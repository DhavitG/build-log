// const express = require("express");

// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.listen(3000); //which port

const express = require("express");

const app = express();

let users = [
  {
    name: "dhavit",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

//to send get requests, query parameters often used
app.get("/", function (req, res) {
  const dhavitKidneys = users[0].kidneys;
  const numberOfKidneys = dhavitKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (dhavitKidneys[i].healthy === true) numberOfHealthyKidneys += 1;
  }
  const numberOfUnealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    dhavitKidneys,
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnealthyKidneys,
  });
});

app.post("/", function (req, res) {
  // req.body.isHealthy, so isHealthy is what you are trying to catch
  const isHealthy = req.body.isHealthy; // got an error here (something to do with middlewares)
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  if (unhealthy()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }

    res.json({});
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

app.delete("/", function (req, res) {
  if (unhealthy()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }

    users[0].kidneys = newKidneys;
    res.json({
      msg: "Done",
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function unhealthy() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000);
