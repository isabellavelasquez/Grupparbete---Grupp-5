import { Product } from "../Models/Product";
import "../styles/modal.scss";

export function modalFunction(product: Product) {
  const header = document.getElementById("header");
  const modalWrapper = document.createElement("div");
  modalWrapper.id = "modal";
  const pTag = document.createElement("p");
  pTag.innerHTML = product.title + " lades till i varukorgen";
  const aTag = document.createElement("a");
  aTag.innerHTML = "Visa";
  aTag.href = "../../src/pages/cart.html";
  const xIcon = document.createElement("img");
  xIcon.src = "../../assets/icons/x_icon.png";
  xIcon.alt = "x icon";

  modalWrapper?.appendChild(pTag);
  modalWrapper?.appendChild(aTag);
  modalWrapper?.appendChild(xIcon);
  header?.appendChild(modalWrapper);

  setTimeout(() => {
    if (modalWrapper) {
      modalWrapper.parentNode?.removeChild(modalWrapper);
    }
  }, 3000);
}
