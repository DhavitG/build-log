// interface UserType {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function greet(user: UserType) {
//   console.log(user.age);
// }

// address will be optional but give the entire thing or dont
// address?: {
//   city: string;
//   country: string;
//   pincode: number;
// };

// Interfaces: used to define custom types

interface Address {
  city: string;
  country: string;
  pincode: number;
}
interface User {
  name: string;
  age: number;
  address: Address;
}

interface Office {
  address: Address;
}

let user1: User = {
  name: "Dhavit",
  age: 21,
  address: {
    city: "Mumbai",
    country: "India",
    pincode: 123456,
  },
};

let user2: User = {
  name: "Huhuhu",
  age: 19,
  address: {
    city: "Mumbai",
    country: "India",
    pincode: 123456,
  },
};

function isLegal(user: User): boolean {
  return user.age >= 18;
}

const ans = isLegal(user1);
console.log(ans);
