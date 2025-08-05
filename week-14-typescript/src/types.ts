// interface User1 {
//   name: string;
//   age: number;
// }

// *** you cant implement a type
// *** type lets you do unions and intersections
// union : A or B or both
// intersection : A and B strictly
type User = {
  name: string;
  age: number;
};

function isLegal(user: User): boolean {
  return user.age > 18;
}

type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

let e: Employee = {
  name: "Dhavit G",
  startDate: "01-02-2003",
};

let m: Manager = {
  name: "Omprakash mishra",
  department: "backend",
};

let t: TeamLead = {
  name: "Mark Z.",
  startDate: "01-02-2000",
  department: "Tech",
};
