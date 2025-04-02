// import { readFile } from "fs";
// import { Command } from "commander";
// const program = new Command();

// program
//   .name("counter")
//   .description("CLI to do file based tasks")
//   .version("0.8.0");

// program
//   .command("count")
//   .description("Count the number of words in a file")
//   .argument("file", "file to count")
//   .action((file) => {
//     readFile(file, "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         let words = 0;
//         for (let i = 0; i < data.length; i++) {
//           if (data[i] === " ") {
//             words += 1;
//           }
//         }
//         console.log(`There are ${words + 1} words in ${file}`);
//       }
//     });
//   });

// program.parse();

import { Command } from "commander";
import fs from "fs";
import path from "path";

const program = new Command();
const filePath = path.resolve("todos.json");

// Utility function to read todos
const readTodos = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]), "utf-8");
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// Utility function to write todos
const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
};

// Add a todo
program
  .command("add <todo>")
  .description("Add a new todo")
  .action((todo) => {
    const todos = readTodos();
    todos.push({ id: todos.length + 1, task: todo, done: false });
    writeTodos(todos);
    console.log(`Added: "${todo}"`);
  });

// Delete a todo
program
  .command("delete <id>")
  .description("Delete a todo by ID")
  .action((id) => {
    let todos = readTodos();
    const initialLength = todos.length;
    todos = todos.filter((todo) => todo.id !== parseInt(id));
    writeTodos(todos);
    if (todos.length < initialLength) {
      console.log(`Deleted todo with ID ${id}`);
    } else {
      console.log(`No todo found with ID ${id}`);
    }
  });

// Mark a todo as done
program
  .command("done <id>")
  .description("Mark a todo as done by ID")
  .action((id) => {
    const todos = readTodos();
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (todo) {
      todo.done = true;
      writeTodos(todos);
      console.log(`Marked todo with ID ${id} as done`);
    } else {
      console.log(`No todo found with ID ${id}`);
    }
  });

// Show all todos
program
  .command("list")
  .description("Show all todos")
  .action(() => {
    const todos = readTodos();
    console.log("Todos:");
    todos.forEach((todo) => {
      console.log(
        `${todo.id}. ${todo.task} [${todo.done ? "DONE" : "PENDING"}]`
      );
    });
  });

program.parse(process.argv);
