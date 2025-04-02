const fs = require("fs");

fs.appendFile(
  "../../../../a.txt",
  "\nAppending additional content",
  "utf-8",
  (err) => {
    if (err) {
      console.error("There has been a problem", err);
    }

    console.log("Content has been successfully appended!");
  }
);
