export default (name) => {
  //   console.log("hello " + name);
  console.log(`Hello ${name}`);
};

const topla = (a, b) => a + b;

const cikar = (a, b) => a - b;

const text = "Text";

const user = {
  name: "mehmet",
  surname: "Seven",
};

const users = [
  {
    name: "Ali",
    surname: "Sev",
  },
  {
    name: "baran",
    surname: "Sev",
  },
];

export { topla, cikar, user, users, text };
