interface People {
  name: string;
  age: number;
  // greet: () => string;
}

const person: People = {
  name: "Dhavit",
  age: 21,
  // greet: function () {
  //   return "hi " + this.age;
  // },
};

class Manager implements People {
  // with public it gets initalised in the class
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  isLegal = () => {
    return this.age >= 18;
  };
}

const obj = new Manager("Alice", 30);
console.log(obj.isLegal());
