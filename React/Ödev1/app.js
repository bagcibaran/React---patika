import axios from "axios";

async function getData(Number) {
  const { data: user1 } = await axios(
    `https://jsonplaceholder.typicode.com/users/${Number}`
  );
  const { data: user2 } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${Number}`
  );

  console.log(user1);
  console.log(user2);
}

export default getData;
