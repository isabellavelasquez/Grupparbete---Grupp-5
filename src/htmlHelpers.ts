import { HTMLProductPage } from "./htmlHelperProductPage";
import { Product } from "./Models/Product";

const products: Product[] = [
  new Product(
    "Shirt",
    100,
    "assets/products/Blue shirt.png",
    "Blue Shirt",
    "abc123",
    false
  ),
  new Product(
    "Red dress",
    250,
    "assets/products/Red dress.png",
    "Red Dress",
    "abc124",
    false
  ),
  new Product(
    "Boots",
    300,
    "assets/products/Boots.png",
    "Boots",
    "abc125",
    false
  ),
  new Product(
    "Red bag",
    250,
    "assets/products/Red bag.png",
    "Red bag",
    "abc1237",
    false
  ),
];

export const createProductsHTML = () => {
  products.forEach((product) => {
    const image = document.createElement("img");
    document.getElementById("productsContainer")?.appendChild(image);
    image.src = product.imgSrc;
    image.alt = product.imgAlt;

    const title = document.createElement("h2");
    document.getElementById("productsContainer")?.appendChild(title);
    (title as HTMLHeadingElement).innerHTML = product.title;

    const price = document.createElement("p");
    document.getElementById("productsContainer")?.appendChild(price);
    price.innerHTML = String(product.price);
    image.addEventListener("click", () => {
      const productsContainer = document.getElementById("productsContainer");
      if (productsContainer) {
        productsContainer.innerHTML = "";
      }
      HTMLProductPage(product);
      return product;
      //   behöver denna vara i if satsen eller utanför
    });
  });
};
