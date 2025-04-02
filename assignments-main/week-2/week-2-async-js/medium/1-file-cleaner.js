const fs = require("fs");

function cleanFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("something's wrong", err.message);
      return;
    }

    const cleanedContent = data.trim().replace(/\s+/g, " ");

    fs.writeFile(filePath, cleanedContent, "utf-8", (err) => {
      if (err) {
        console.error(err.message);
      }

      console.log("File cleaned successfully!");
    });
  });
}

const filePath = "text.txt";
cleanFile(filePath);
