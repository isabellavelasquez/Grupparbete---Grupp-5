import { cart, getProductFromID, loadCart } from "../services.ts/cartService";
import "../styles/orderOverview.scss";
import { theBackButton } from "./thebackbutton";

const cartIcon = document.getElementById("cartIcon");
if (cartIcon) {
  cartIcon.style.display = "none";
}

const orderviewDiv = document.getElementById("orderOverview");
const h3 = document.createElement("h3");
h3.innerHTML = "Your order";
orderviewDiv?.appendChild(h3);
let total = 0;

const orderViewHMTL = () => {
  loadCart();

  for (const [id, amount] of cart.entries()) {
    const product = getProductFromID(id);

    if (product) {
      const productsContainer = document.createElement("div");
      const img = document.createElement("img");
      img.src = product.imgSrc;
      img.alt = product.imgAlt;
      const title = document.createElement("h4");
      title.innerHTML = product.title;
      const quantity = document.createElement("p");
      quantity.innerHTML = "Amount: " + amount;
      quantity.classList.add("pTagAmount");
      const sum = document.createElement("p");
      sum.innerHTML = String(amount * product.price) + " :-";
      sum.classList.add("sumPtag");

      productsContainer.append(img, title, quantity, sum);
      orderviewDiv?.appendChild(productsContainer);

    }
    if(product) {
    total += product.price * amount;
    }

  }
  const totalSum = document.createElement("p");
  totalSum.classList.add("totalSum");

  const totalSumDiv = document.createElement("div");
  totalSumDiv.classList.add("sumDiv");
  const pTagTotal = document.createElement("p");
  pTagTotal.innerHTML = "Total: ";
  pTagTotal.classList.add("total");
  totalSum.innerHTML = String(total) + " :-";
  totalSumDiv.append(pTagTotal, totalSum);
  orderviewDiv?.appendChild(totalSumDiv);
};
orderViewHMTL();
theBackButton("../../assets/icons/back.arrow.png", "backbutton");
