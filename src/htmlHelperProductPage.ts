import { Product } from "./Models/Product";

export const HTMLProductPage = (product: Product) => {
  const container = document.createElement("container");
  const productImg = document.createElement("img");
  productImg.src = product.imgSrc;
  productImg.alt = product.imgAlt;

  const productTitle = document.createElement("h3");
  productTitle.innerHTML = product.title;

  const productPrice = document.createElement("p");
  productPrice.innerHTML = String(product.price) + ":-";

  const productDescription = document.createElement("p");
  productDescription.innerHTML = product.description;

  const amount = document.createElement("p");
  amount.innerHTML = product.amount;

  const addToCartBtn = document.createElement("button");
  addToCartBtn.innerHTML = "Lägg till";
};
