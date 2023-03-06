let donuts = [
  {
    price: "$32",
    imageSrc: "./recourses/donut1.png",
    name: "Nuts caramell",
    origin: "Dunkin's",
  },
];

let pizzas = [
  {
    price: "$32",
    imageSrc: "./recourses/pizza1.png",
    name: "Pizza mayham",
    origin: "Dolly dimples",
  },
];

let burgers = [
  {
    price: "$32",
    imageSrc: "./recourses/burger1.png",
    name: "Stacks of heaven",
    origin: "Burger Masters",
  },
];

let milkshakes = [
  {
    price: "$32",
    imageSrc: "./recourses/milkshake1.png",
    name: "Milky dream",
    origin: "Dairy King",
  },
];

let pancakes = [
  {
    price: "$32",
    imageSrc: "./recourses/pancakes1.png",
    name: "Breakfast delight",
    origin: "Sweet n sweeter",
  },
];

document.addEventListener("click", (e) => {
  const isSelector = e.target.matches("[data-selector]");

  if (!isSelector && e.target.closest("[data-selector]") != null) return;

  let currentSelected;
  if (isSelector) {
    currentSelected = e.target.closest("[data-selector]");
    currentSelected.classList.toggle("active");

    document.querySelectorAll("[data-selector].active").forEach((selector) => {
      if (selector == currentSelected) return;
      selector.classList.remove("active");
    });
  }
});

function renderItem(price, imageSrc, name, origin) {
  const itemTemplate = document.getElementById("item-template");
  const itemElement = document.importNode(itemTemplate.content, true);

  const itemPrice = itemElement.querySelector("[data-item-price]");
  const itemImage = itemElement.querySelector("[data-item-image]");
  const itemName = itemElement.querySelector("[data-item-name]");
  const itemOrigin = itemElement.querySelector("[data-item-origin]");

  itemPrice.textContent = price;
  itemImage.src = imageSrc;
  itemName.textContent = name;
  itemOrigin.textContent = origin;

  document.querySelector(".selected-display").appendChild(itemElement);
}

function clearDisplay() {
  let display = document.querySelector(".selected-display");

  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}

function renderDonuts() {
  clearDisplay();
  for (let i = 0; i < 4; i++) {
    renderItem(
      donuts[0].price,
      donuts[0].imageSrc,
      donuts[0].name,
      donuts[0].origin
    );
  }
}

function renderPizzas() {
  clearDisplay();
  for (let i = 0; i < 4; i++) {
    renderItem(
      pizzas[0].price,
      pizzas[0].imageSrc,
      pizzas[0].name,
      pizzas[0].origin
    );
  }
}

function renderBurgers() {
  clearDisplay();
  for (let i = 0; i < 4; i++) {
    renderItem(
      burgers[0].price,
      burgers[0].imageSrc,
      burgers[0].name,
      burgers[0].origin
    );
  }
}

function renderMilkshakes() {
  clearDisplay();
  for (let i = 0; i < 4; i++) {
    renderItem(
      milkshakes[0].price,
      milkshakes[0].imageSrc,
      milkshakes[0].name,
      milkshakes[0].origin
    );
  }
}

function renderPancakes() {
  clearDisplay();
  for (let i = 0; i < 4; i++) {
    renderItem(
      pancakes[0].price,
      pancakes[0].imageSrc,
      pancakes[0].name,
      pancakes[0].origin
    );
  }
}
