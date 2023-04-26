const jokeText = document.querySelector(".jokeText");
const button = document.querySelector("button");

button.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const joke = data.joke;
      jokeText.innerText = `${joke}😂`;
    });
}
