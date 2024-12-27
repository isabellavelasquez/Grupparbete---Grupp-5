import { Product } from "../Models/Product";
import { modalFunction } from "./modal";

export const HTMLProductPage = () => {
  const product = new Product(
    "Boots",
    300,
    "../assets/products/Boots.png",
    "Boots",
    "Ett par chelseaboots med resår i sidorna och hälla bak. Foder och innersula i satin.",
    "abc125",
    1
  );
  const container = document.getElementById("productContainer");

  const productImg = document.createElement("img");
  productImg.classList.add("productImg");
  productImg.src = product.imgSrc;
  productImg.alt = product.imgAlt;

  const productTitle = document.createElement("h3");
  productTitle.classList.add("productTitle");
  productTitle.innerHTML = product.title;

  const productPrice = document.createElement("p");
  productPrice.classList.add("productPrice");
  productPrice.innerHTML = String(product.price) + ":-";

  const productDescription = document.createElement("p");
  productDescription.classList.add("productDesc");
  productDescription.innerHTML = product.description;

  const amount = document.createElement("p");
  amount.classList.add("productAmount");
  amount.innerHTML = String(product.amount);
  const amountDiv = document.createElement("div");
  const minusBtn = document.createElement("button");
  minusBtn.innerHTML = "-";
  const plusBtn = document.createElement("button");
  plusBtn.innerHTML = "+";
  minusBtn.addEventListener("click", () => {});
  plusBtn.addEventListener("click", () => {});

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("addToCartBtn");
  addToCartBtn.innerHTML = "Lägg till";
  addToCartBtn.addEventListener("click", () => {
    modalFunction(product);
  });

  amountDiv.appendChild(minusBtn);
  amountDiv.appendChild(amount);
  amountDiv.appendChild(plusBtn);
  if (container) {
    container.appendChild(productImg);
    container.appendChild(productTitle);
    container.appendChild(productPrice);
    container.appendChild(productDescription);
    container.appendChild(amountDiv);
    container.appendChild(addToCartBtn);
  }
};
HTMLProductPage();
