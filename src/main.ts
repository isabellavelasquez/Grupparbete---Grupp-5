import "./style.scss";

import { createProductsHTML } from "./HTMLHelpers/productsOverview";
import { theBackButton } from "./HTMLHelpers/thebackbutton";

localStorage.getItem("Cart");

// header
const h1 = document.getElementById("webShopName");
if (h1) {
  h1.innerHTML = "Our Cool Webshop";
}
const input = document.getElementById("searchInput");
if (input) {
  (input as HTMLInputElement).placeholder = "Sök efter vara..";
}
input?.classList.add("inputStyle");
document.getElementById("searchBar")?.addEventListener("submit", (e) => {
  e.preventDefault();
});

const navbar = document.getElementById("navbar");
const categoryContainer = document.createElement("ul");
categoryContainer.classList.add("categorys");
const firstCategory = document.createElement("li");
firstCategory.innerHTML = "Man";
const secondCategory = document.createElement("li");
secondCategory.innerHTML = "Kvinna";
const thirdCategory = document.createElement("li");
thirdCategory.innerHTML = "Barn";

categoryContainer.appendChild(firstCategory);
categoryContainer.appendChild(secondCategory);
categoryContainer.appendChild(thirdCategory);
navbar?.appendChild(categoryContainer);
// cart icon top corner
const cartIcon = document.createElement("img");
cartIcon.src = "../assets/icons/cart.png";
cartIcon.alt = "icon av shoppingvagn";
cartIcon.id = "cartIcon";
cartIcon.classList.add("cartButtonIcon");
document.getElementById("header")?.appendChild(cartIcon);

cartIcon.addEventListener("click", () => {
  window.location.href = "/pages/cart.html";
  console.log("du klickade");
});

createProductsHTML();
theBackButton("../assets/icons/back.arrow.png", "backbutton");
