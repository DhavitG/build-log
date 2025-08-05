// array as a type: number[]

// interfaces vs types
// Create two types called User and Admin
// Create a function that takes either a user / an admin, and returns a string saying "Welcome [name]"

interface User {
  name: string;
  age: number;
  createdAt: Date;
}

interface Admin {
  name: string;
  permissions: string;
  createdAt: Date;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin): string {
  return "Welcome " + user.name;
}

let obj: User = {
  name: "Dhavit",
  age: 21,
  createdAt: new Date(),
};

console.log(greet(obj));
