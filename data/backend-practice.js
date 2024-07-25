const xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
