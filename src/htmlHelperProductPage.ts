import { Product } from "./Models/Product";

export const HTMLProductPage = (product: Product) => {
  const container = document.createElement("container");
  container.classList.add("productContainer");
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

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("addToCartBtn");
  addToCartBtn.innerHTML = "Lägg till";

  container.appendChild(productImg);
  container.appendChild(productTitle);
  container.appendChild(productPrice);
  container.appendChild(productDescription);
  container.appendChild(amount);
  container.appendChild(addToCartBtn);
  document.getElementById("productsContainer")?.appendChild(container);
};
