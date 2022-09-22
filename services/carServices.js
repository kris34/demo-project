const fs = require('fs');
const filename = './models/data.json';
const data = JSON.parse(fs.readFileSync(filename));

async function persist() {
  return new Promise((res, rej) => {
    fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
      if (err == null) {
        res();
      } else {
        rej(err);
      }
    });
  });
}

function getById(car) {
  return data.find((car) => car.id == id);
}

async function create(data) {
  const car = {
    id: getId(),
    brand: data.brand,
    model: data.model,
    price: data.price,
    year: data.year,
    details: data.details,
  };

  const missing = Object.entries(car).forEach(([k, v]) => !v);

  if (missing.length > 0) {
    throw new Error(missing.map((x) => `${x[0]} is required!`).join('\n'));
  }
  data.push(car);
  await persist();
  return car;
}

function getId() {
  return ('000000' + ((Math.random() * 999999) | 0).toString(16)).slice(-6);
}

module.exports = { 
  create
}