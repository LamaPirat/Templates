let imageContainer = document.querySelector(".image-container");
let arrowContainer = document.querySelectorAll(".arrowContainer");
let currentImageIndex = 0;

let images = ["wp1.jpg", "wp2.jpg", "wp3.jpg", "wp4.jpg", "wp5.jpg", "wp6.jpg"];

for (i = 0; i < images.length; i++) {
  let image = document.createElement("img");
  image.src = `./assets/${images[i]}`;
  image.setAttribute("data", `image${i}`);
  if (i != currentImageIndex) {
    image.style.left = "990px";
  }
  imageContainer.appendChild(image);
}

function rightScroll() {
  let currentImage = document.querySelector(`[data=image${currentImageIndex}]`);
  let nextImage = document.querySelector(
    `[data=image${currentImageIndex + 1}]`
  );

  console.log(currentImage);
  console.log(nextImage);
}

function leftScroll() {}
