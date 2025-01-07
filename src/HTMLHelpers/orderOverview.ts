import { Product } from "../Models/Product";
import { cart, getProductFromID, loadCart } from "../services.ts/cartService";
import "../styles/orderOverview.scss";
import { theBackButton } from "./thebackbutton";
import { products } from "./productsOverview";

const cartIcon = document.getElementById("cartIcon");
if (cartIcon) {
  cartIcon.style.display = "none";
}

const orderviewDiv = document.getElementById("orderOverview");
const h3 = document.createElement("h3");
h3.innerHTML = "Your order";
orderviewDiv?.appendChild(h3);

const orderViewHMTL = (product: Product) => {
  loadCart();
  // const productsFromCart = Array.from(cart.entries());
  const productAmount = cart.get(product.id) || 0;

  // productsFromCart.forEach((productFromLocalS) => {
  //   const productAmount = productFromLocalS[1];
  //   const productID: string = productFromLocalS[0];
  // const product = products.find((product) => product.id === productID);
  for (const [id] of cart) {
    const productID = getProductFromID(id);

    // const product = getProductFromID(id);
    if (productID) {
      const productsContainer = document.createElement("div");
      const img = document.createElement("img");
      img.src = product.imgSrc;
      img.alt = product.imgAlt;
      const title = document.createElement("h4");
      title.innerHTML = product.title;
      const amount = document.createElement("p");
      amount.innerHTML = "Amount: " + productAmount;
      amount.classList.add("pTagAmount");
      const sum = document.createElement("p");
      sum.innerHTML = String(productAmount * product.price) + " :-";
      sum.classList.add("sumPtag");

      productsContainer.append(img, title, amount, sum);
      orderviewDiv?.appendChild(productsContainer);
    }
  }
  const totalSum = document.createElement("p");
  totalSum.classList.add("totalSum");

  let total = 0;
  products.forEach((product) => {
    total += product.price * productAmount;
  });
  const totalSumDiv = document.createElement("div");
  totalSumDiv.classList.add("sumDiv");
  const pTagTotal = document.createElement("p");
  pTagTotal.innerHTML = "Total: ";
  pTagTotal.classList.add("total");
  totalSum.innerHTML = String(total) + " :-";
  totalSumDiv.append(pTagTotal, totalSum);
  orderviewDiv?.appendChild(totalSumDiv);
};
orderViewHMTL(product);
theBackButton("../../assets/icons/back.arrow.png", "backbutton");
