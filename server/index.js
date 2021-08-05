const express = require("express");
const path = require("path");
const faker = require("faker");
const { data } = require("./data.js");

const app = express();
const port = 4000;

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function randomizeDataPrice() {
  for (let i = 0; i < data.length; i++) {
    data[i].price =
      Math.floor(
        Math.random() * (data[i].priceRange[1] - data[i].priceRange[0])
      ) + data[i].priceRange[0];
  }
}

app.use(express.static(path.join(__dirname, "../public")));

app.get("/data", (req, res) => {
  const dataWithPrices = randomizeDataPrice();
  const randomized = shuffle(data);

  res.send(randomized);
});

app.get("/search/:searchInput", (req, res) => {
  const searchInput = req.params.searchInput.toLowerCase();
  const regex = new RegExp(searchInput);
  let searchResults = [];

  for (let i = 0; i < data.length; i++) {
    if (regex.test(data[i].productName.toLowerCase())) {
      searchResults.push(data[i]);
    }
  }

  res.send(searchResults);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
