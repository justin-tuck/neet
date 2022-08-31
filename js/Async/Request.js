import fetch from "node-fetch";

// https://reqres.in/api/users/?page=2
// https://reqres.in/

const getData = () => {
  fetch("https://reqres.in/api/users/?page=2", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendData = () => {};

getData();
console.log("you can do it!");
