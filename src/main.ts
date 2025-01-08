import "./style.scss";
import "./styles/footer.scss";

import { createProductsHTML } from "./HTMLHelpers/productsOverview";

localStorage.getItem("Cart");

// header
const h1 = document.getElementById("webShopName");
if (h1) {
  h1.innerHTML = "Our Cool Webshop";
}
const input = document.getElementById("searchInput");
if (input) {
  (input as HTMLInputElement).placeholder = "Search for item..";
}
input?.classList.add("inputStyle");
document.getElementById("searchBar")?.addEventListener("submit", (e) => {
  e.preventDefault();
});
h1?.addEventListener("click", () => {
  window.location.href = "/";
});

const navbar = document.getElementById("navbar");
const categoryContainer = document.createElement("ul");
categoryContainer.classList.add("categorys");
const firstCategory = document.createElement("li");
firstCategory.innerHTML = "Man";
const secondCategory = document.createElement("li");
secondCategory.innerHTML = "Women";
const thirdCategory = document.createElement("li");
thirdCategory.innerHTML = "Kids";

categoryContainer.appendChild(firstCategory);
categoryContainer.appendChild(secondCategory);
categoryContainer.appendChild(thirdCategory);
navbar?.appendChild(categoryContainer);
// cart icon top corner
const cartIcon = document.createElement("img");
cartIcon.src = "../../assets/icons/cart.png";
cartIcon.alt = "icon av shoppingvagn";
cartIcon.id = "cartIcon";
cartIcon.classList.add("cartButtonIcon");
document.getElementById("header")?.appendChild(cartIcon);

cartIcon.addEventListener("click", () => {
  window.location.href = "../../src/pages/cart.html";
  console.log("du klickade");
});

createProductsHTML();

// footer
const footer = document.getElementById("footer");

const pTag = document.createElement("p");
pTag.innerHTML = "Contact";
pTag.classList.add("contact");

const ul = document.createElement("ul");
const nameHolder1 = document.createElement("li");
nameHolder1.innerHTML = "CJ";
const aTag1 = document.createElement("a");
aTag1.classList.add("footer-link");
aTag1.href = "https://www.linkedin.com/in/carl-johan-viklund-b70b79335/";
aTag1.appendChild(nameHolder1);
const nameHolder2 = document.createElement("li");
nameHolder2.innerHTML = "Isabella";
const aTag2 = document.createElement("a");
aTag2.classList.add("footer-link");
aTag2.href = "https://www.linkedin.com/in/freja-edberg-090489345/";
aTag2.appendChild(nameHolder2);
const nameHolder3 = document.createElement("li");
nameHolder3.innerHTML = "Freja";
const aTag3 = document.createElement("a");
aTag3.classList.add("footer-link");
aTag3.href = "https://www.linkedin.com/in/freja-edberg-090489345/";
aTag3.appendChild(nameHolder3);
const phoneHolder = document.createElement("li");
phoneHolder.innerHTML = "070- 123 45 67";

ul.append(aTag1, aTag2, aTag3, phoneHolder);

const paymentDiv = document.createElement("div");
paymentDiv.classList.add("paymentCards");
const card1 = document.createElement("img");
card1.src = "/../assets/icons/card_credit_debit_mastercard_icon.png";
card1.alt = "Mastercard icon";
const card2 = document.createElement("img");
card2.src = "/../assets/icons/card_credit_logo_visa_icon.png";
card2.alt = "Visa icon";
const card3 = document.createElement("img");
card3.src = "/../assets/icons/card_paypal_method_payment_icon.png";
card3.alt = "Paypal icon";

paymentDiv.append(card1, card2, card3);

const pTagWebshop = document.createElement("p");
pTagWebshop.innerHTML = "Our Cool Webshop";
pTagWebshop.classList.add("webshopName");

footer?.append(pTag, ul, paymentDiv, pTagWebshop);
