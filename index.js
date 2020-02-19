console.log('working!');

const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const wealth = document.getElementById('calculate-wealth');
const main = document.querySelector('main');

let data = [];

// getRandomUser();
// getRandomUser();
// getRandomUser();

addUser.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);

// fetch random user and add mony
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000)
  };
  addData(newUser);
}

// Add new person object to data array
function addData(obj) {
  data.push(obj);
  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // clear the main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

  providedData.forEach(person => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
      person.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  return '£' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}

// Double everyone's money
function doubleMoney() {
  data = data.map(person => {
    return { ...person, money: person.money * 2 };
  });

  updateDOM();
}
