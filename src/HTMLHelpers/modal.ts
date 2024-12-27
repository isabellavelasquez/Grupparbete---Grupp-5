import { Product } from "../Models/Product";

export function modalFunction(product: Product) {
  const modalWrapper = document.getElementById("modal");
  const pTag = document.createElement("p");
  pTag.innerHTML = product.title + " lades till i varukorgen";
  const aTag = document.createElement("a");
  aTag.innerHTML = "Visa";
  // TODO: ska länka till varukorgssidan ej index
  aTag.href = "index.html";
  const xIcon = document.createElement("img");
  xIcon.src = "../../assets/icons/x_icon.png";
  xIcon.alt = "x icon";

  modalWrapper?.appendChild(pTag);
  modalWrapper?.appendChild(aTag);
  modalWrapper?.appendChild(xIcon);

  setTimeout(() => {
    if (modalWrapper) {
      modalWrapper.innerHTML = "";
    }
  }, 3000);
}
