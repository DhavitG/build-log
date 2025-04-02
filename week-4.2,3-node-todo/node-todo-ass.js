const express = require("express");

const app = express();

let tasks = [
  {
    day: "Monday-week-1",
    id: 1,
    isCompleted: true,
    description: "go to the gym",
  },
  {
    day: "Tuesday-week-1",
    id: 2,
    isCompleted: true,
    description: "drink water",
  },
  {
    day: "Wednesday-week-1",
    id: 3,
    isCompleted: false,
    description: "dsa",
  },
  {
    day: "Thursday-week-1",
    id: 4,
    isCompleted: false,
    description: "research paper",
  },
  {
    day: "Friday-week-1",
    id: 5,
    isCompleted: false,
    description: "go to the gym",
  },
  {
    day: "Saturday-week-1",
    id: 6,
    isCompleted: false,
    description: "eat",
  },
  {
    day: "Sunday-week-1",
    id: 7,
    isCompleted: false,
    description: "rest",
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  res.json(tasks);
});

app.post("/", function (req, res) {
  const day = req.body.day;
  const desc = req.body.desc;
  tasks.push({
    day: day,
    id: tasks.length + 1,
    isCompleted: false,
    description: desc,
  });

  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].isCompleted = true;
  }

  res.json({});
});

app.delete("/", function (req, res) {
  if (check()) {
    let remainingTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (!tasks[i].isCompleted) {
        remainingTasks.push(tasks[i]);
      }
    }

    tasks = remainingTasks;
    res.json({
      msg: "Done",
    });
  } else {
    res.status(404).json({
      err: "No completed tasks to delete",
    });
  }
});

function check() {
  let done = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].isCompleted) done += 1;
  }
  return done;
}

app.listen(3001);
