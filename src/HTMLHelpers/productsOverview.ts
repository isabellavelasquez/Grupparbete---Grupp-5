import { HTMLProductPage } from "./productPage";
import { Product } from "../Models/Product";
import { addToCart } from "../services.ts/cartService";
import "../style.scss";
import { modalFunction } from "./modal";

export const products: Product[] = [
  new Product(
    "Shirt",
    100,
    "../../assets/products/Blue shirt.png",
    "Blue Shirt",
    "En stickad tröja med avslappnad passform tillverkad av en mjuk blandning av återvunnen polyamid och återvunnen polyester, utökad med en touch av återvunnen elastan och ull för extra stretch och värme. Den har en rund ribbad halsringning, droppade axlar och ribbade kanter.",
    "abc123",
    1
  ),
  new Product(
    "Red dress",
    250,
    "../../assets/products/Red dress.png",
    "Red Dress",
    "Klänning med jacquardvävt mönster. Rundad midja med rynk. Dold dragkedja mitt bak. Fodrad upptill.",
    "abc124",
    1
  ),
  new Product(
    "Boots",
    300,
    "../../assets/products/Boots.png",
    "Boots",
    "Ett par chelseaboots med resår i sidorna och hälla bak. Foder och innersula i satin.",
    "abc125",
    1
  ),
  new Product(
    "Red bag",
    250,
    "../../assets/products/Red bag.png",
    "Red bag",
    "En crossbody-väska med två separata fack och dolt magnetlås. Väskan har reglerbar axelrem och reglerbart handtag med klätt spänne i vardera sida. Fodrad. Djup 9 cm. Höjd 23 cm. Bredd 26 cm",
    "abc1237",
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
      if (cartIcon) {
        cartIcon.classList.remove("animate");
        setTimeout(() => {
          cartIcon.classList.add("animate");
        }, 10);
      }
    });

    image.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "/pages/productPage.html";
    });

    modalFunction(product);
  });
};
