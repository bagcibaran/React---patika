const users = [
  {
    name: "Mehmet",
    age: 20,
  },
  {
    name: "Ali",
    age: 29,
  },
  {
    name: "Sevilay",
    age: 40,
  },
];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/
//push
// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

// map

// users.map((item) => {
//   console.log(item.name);
// });

//find

// const result = users.find((item) => item.name === "Ali" && item.age > 18);
// console.log(result);

// filter

// const filtered = users.filter(({ name, age }) => name === "Ali" && age < 128);
// console.log(filtered);

//some * only one item

// const some = users.some((item) => item.age === 40);
// console.log(some);

// every
// for  every item

// const every = users.every((item) => item.age > 5);
// console.log(every);

// includes ** return tru false value

const meyveler = ["elma", "armut", "muz"];

const isIncluded = meyveler.includes("muz");
console.log(isIncluded);
