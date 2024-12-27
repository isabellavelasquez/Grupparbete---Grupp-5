import { HTMLProductPage } from "./htmlHelperProductPage";
import { Product } from "./Models/Product";
import { addToCart } from "./services.ts/cartService";

const products: Product[] = [
  new Product(
    "Shirt",
    100,
    "assets/products/Blue shirt.png",
    "Blue Shirt",
    "En stickad tröja med avslappnad passform tillverkad av en mjuk blandning av återvunnen polyamid och återvunnen polyester, utökad med en touch av återvunnen elastan och ull för extra stretch och värme. Den har en rund ribbad halsringning, droppade axlar och ribbade kanter.",
    "abc123",
    false,
    1
  ),
  new Product(
    "Red dress",
    250,
    "assets/products/Red dress.png",
    "Red Dress",
    "Klänning med jacquardvävt mönster. Rundad midja med rynk. Dold dragkedja mitt bak. Fodrad upptill.",
    "abc124",
    false,
    1
  ),
  new Product(
    "Boots",
    300,
    "assets/products/Boots.png",
    "Boots",
    "Ett par chelseaboots med resår i sidorna och hälla bak. Foder och innersula i satin.",
    "abc125",
    false,
    1
  ),
  new Product(
    "Red bag",
    250,
    "assets/products/Red bag.png",
    "Red bag",
    "En crossbody-väska med två separata fack och dolt magnetlås. Väskan har reglerbar axelrem och reglerbart handtag med klätt spänne i vardera sida. Fodrad. Djup 9 cm. Höjd 23 cm. Bredd 26 cm",
    "abc1237",
    false,
    1
  ),
];

export const createProductsHTML = () => {
  products.forEach((product) => {
    const image = document.createElement("img");
    document.getElementById("productsContainer")?.appendChild(image);
    image.src = product.imgSrc;
    image.alt = product.imgAlt;

    const title = document.createElement("h2");
    document.getElementById("productsContainer")?.appendChild(title);
    (title as HTMLHeadingElement).innerHTML = product.title;

    const price = document.createElement("p");
    document.getElementById("productsContainer")?.appendChild(price);
    price.innerHTML = String(product.price) + ":-";
    image.addEventListener("click", () => {
      const productsContainer = document.getElementById("productsContainer");
      if (productsContainer) {
        productsContainer.innerHTML = "";
      }
      HTMLProductPage(product);
    });
  });
};

