import { HTMLProductPage } from "./productPage";
import { Product } from "../Models/Product";
import {
  addToCart,
  getProductFromID,
  loadCart,
} from "../services.ts/cartService";
import "../style.scss";
import { modalFunction } from "./modal";

loadCart();

export const products: Product[] = [
  new Product(
    "Shirt",
    100,
    "../../assets/products/Blue shirt.png",
    "Blue Shirt",
    "A knitted sweater with a relaxed fit made from a soft blend of recycled polyamide and recycled polyester, enhanced with a touch of recycled elastane and wool for extra stretch and warmth. It features a round ribbed neckline, dropped shoulders, and ribbed edges.",
    "blue-shirt1",
    1
  ),
  new Product(
    "Red dress",
    250,
    "../../assets/products/Red dress.png",
    "Red Dress",
    "Dress with jacquard pattern. Rounded waist with gathers. Hidden zipper at the back. Lined at the top.",
    "red-dress1",
    1
  ),
  new Product(
    "Boots",
    300,
    "../../assets/products/Boots.png",
    "Boots",
    "A pair of Chelsea boots with elastic sides and a pull tab at the back. Lining and insole in satin.",
    "boots1",
    1
  ),
  new Product(
    "Red bag",
    250,
    "../../assets/products/Red bag.png",
    "Red bag",
    "A crossbody bag with two separate compartments and a hidden magnetic lock. The bag has an adjustable shoulder strap and an adjustable handle with covered buckles on each side. Lined. Depth 9 cm. Height 23 cm. Width 26 cm.",
    "red-bag1",
    1
  ),
];

export const createProductsHTML = () => {
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.id = "productContainer";

    const image = document.createElement("img");
    image.src = product.imgSrc;
    image.alt = product.imgAlt;

    const title = document.createElement("h2");
    (title as HTMLHeadingElement).innerHTML = product.title;

    const price = document.createElement("p");
    price.innerHTML = String(product.price) + " :-";

    const quickAddButton = document.createElement("button");
    quickAddButton.innerHTML = "Add to cart";
    quickAddButton.id = "qickAddButton";

    productDiv.append(image, title, price, quickAddButton);

    document.getElementById("productsContainer")?.appendChild(productDiv);

    quickAddButton.addEventListener("click", () => {
      addToCart(product);
      modalFunction(product);
      const cartIcon = document.getElementById("cartIcon");
      cartIcon?.addEventListener("click", () => {
        window.location.href = "../src/pages/cart.html";
      });
      if (cartIcon) {
        cartIcon.classList.remove("animate");
        setTimeout(() => {
          cartIcon.classList.add("animate");
        }, 10);
      }
    });

    image.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "../src/pages/productPage.html";
    });
  });
};
