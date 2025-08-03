// interface UserType {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function greet(user: UserType) {
//   console.log(user.age);
// }

// Interfaces: used to define custom types
interface User {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
    pincode: number;
  };
}

let user: User = {
  name: "Dhavit",
  age: 21,
  address: {
    city: "Mumbai",
    country: "India",
    pincode: 123456,
  },
};

function isLegal(user: User): boolean {
  return user.age >= 18;
}

const ans = isLegal(user);
console.log(ans);
