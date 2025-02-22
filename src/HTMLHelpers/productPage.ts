import { Product } from "../Models/Product";
import { addToCart } from "../services.ts/cartService";
import { modalFunction } from "./modal";
import { theBackButton } from "./thebackbutton";
import "../styles/productPage.scss";

export const HTMLProductPage = () => {
  const selectedProduct = localStorage.getItem("selectedProduct");
  let product: Product;
  if (selectedProduct) {
    product = JSON.parse(selectedProduct);
  } else return;

  const container = document.getElementById("productPageContainer");

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
  minusBtn.addEventListener("click", () => {
    if (product.amount > 1 && container) {
      container.innerHTML = "";
      product.amount = product.amount - 1;
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      HTMLProductPage();
    }
  });
  plusBtn.addEventListener("click", () => {
    if (container) {
      container.innerHTML = "";
    }
    product.amount = product.amount + 1;
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    HTMLProductPage();
  });

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("addToCartBtn");
  addToCartBtn.innerHTML = "Lägg till";
  addToCartBtn.addEventListener("click", () => {
    for (let i = 0; i < product.amount; i++) {
      addToCart(product);
    }
    modalFunction(product);
    const cartIcon = document.getElementById("cartIcon");
    if (cartIcon) {
          cartIcon.classList.remove("animate");
          setTimeout(() => {
            cartIcon.classList.add("animate");
          }, 10);
    }
  });

  amountDiv.append(minusBtn, amount, plusBtn);
  if (container) {
    container.append(
      productImg,
      productTitle,
      productPrice,
      productDescription,
      amountDiv,
      addToCartBtn
    );
  }
};
HTMLProductPage();
theBackButton("../../assets/icons/back.arrow.png", "backbutton");
