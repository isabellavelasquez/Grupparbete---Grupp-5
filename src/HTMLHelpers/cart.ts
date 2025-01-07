import { cart, getProductFromID, loadCart } from "../services.ts/cartService";
import { theBackButton } from "./thebackbutton";

const cartIcon = document.getElementById("cartIcon");
if (cartIcon) {
  cartIcon.style.display = "none";
}

const displayProductsInCart = (cart: Map<string, number>) => {
  if (cart.size === 0) {
    const cartIsEmptyText = document.createElement("p");
    (cartIsEmptyText as HTMLParagraphElement).innerHTML = "Your cart is empty";
    document
      .getElementById("productsInCartContainer")
      ?.appendChild(cartIsEmptyText);
  }

  // else {
  //     const sortedProducts = Array.from(cart.entries()).sort(([productA], [productB]) =>
  //     productA.title.localeCompare(productB.title))

  for (const [id] of cart) {
    const product = getProductFromID(id);
    if (product === undefined) {
      continue;
    }

    const productInCartContainer = document.createElement("div");
    productInCartContainer.id = "productInCartContainer";
    document
      .getElementById("productsInCartContainer")
      ?.appendChild(productInCartContainer);

    const productImgInCart = document.createElement("img");
    productImgInCart.src = product.imgSrc;
    productImgInCart.alt = product.imgAlt;

    const title = document.createElement("h2");
    (title as HTMLHeadingElement).innerHTML = product.title;

    const price = document.createElement("p");
    price.innerHTML = String(product.price) + " :-";

    const quantity = document.createElement("p");
    (quantity as HTMLParagraphElement).innerHTML = String(cart.get(id)) + "x";

    productInCartContainer.append(productImgInCart, title, price, quantity);
  }
  const checkoutButton = document.createElement("button");
  (checkoutButton as HTMLButtonElement).innerHTML = "Proceed to checkout";
  document
    .getElementById("productsInCartContainer")
    ?.appendChild(checkoutButton)
    .addEventListener("click", () => {
      window.location.href = "../../src/pages/usercheckout.html";
    });
};
loadCart();
displayProductsInCart(cart);
theBackButton("../../assets/icons/back.arrow.png", "backbutton");
