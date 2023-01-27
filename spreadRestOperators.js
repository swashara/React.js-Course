const nums = [1, 2, 3];
const newNums = [...nums, 4];

console.log(newNums);

const person = {
  name: "Max",
};
const newPerson = {
  ...person,
  age: 24,
  //   name: "Min",
};

console.log(newPerson);

const sum = (...args) => {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
};

console.log(sum(1, 2, 3, 4));
