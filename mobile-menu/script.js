let donuts = [
  {
    price: "$32",
    imageSrc: "./recourses/donut1.png",
    name: "Nuts caramell",
    origin: "Dunkin's",
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

for (let i = 0; i < 4; i++) {
  renderItem(
    donuts[0].price,
    donuts[0].imageSrc,
    donuts[0].name,
    donuts[0].origin
  );
}
