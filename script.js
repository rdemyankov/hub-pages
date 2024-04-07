const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("gregkozlov");

async function getUser(username) {}

async function getRepos(username) {}

function createUserCard(user) {}

function addReposToCard(repos) {}

form.addEventListener("submit", e => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});