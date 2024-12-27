import { Product } from "../Models/Product";

export function modalFunction(product: Product) {
  const modalWrapper = document.getElementById("modal");
  const pTag = document.createElement("p");
  pTag.innerHTML = product.title + " lades till i varukorgen";
  const aTag = document.createElement("a");
  aTag.innerHTML = "Visa";
  aTag.href = "";

  modalWrapper?.appendChild(pTag);
  modalWrapper?.appendChild(aTag);

  setTimeout(() => {
    if (modalWrapper) {
      modalWrapper.innerHTML = "";
    }
  }, 3000);
}
