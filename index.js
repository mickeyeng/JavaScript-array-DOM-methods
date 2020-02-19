console.log('working!');

const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const wealth = document.getElementById('calculate-wealth');
const main = document.querySelector('main');

let data = [];

// function getRandomUser() {
//   fetch(`https://randomuser.me/api/`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.results[0].name);
//     });
// }

getRandomUser();

// fetch random user and add mony
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000)
  };

  console.log(newUser);
}

function addData(obj) {
  data.push(obj);
}

addUser.addEventListener('click', () => {
  // console.log('clicked');
  // fetch(`https://randomuser.me/api/`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.results[0].name);
  //   });
  // main.innerHTML = `<p>test</p>`;
});
