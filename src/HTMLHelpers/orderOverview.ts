import { Product } from "../Models/Product";

const orderviewDiv = document.getElementById("orderOverview");
const h3 = document.createElement("h3");
h3.innerHTML = "Your order";

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
const orderViewHMTL = () => {
  products.forEach((product) => {
    const productsContainer = document.createElement("container");
    const img = document.createElement("img");
    img.src = product.imgSrc;
    img.alt = product.imgAlt;
    const title = document.createElement("h4");
    title.innerHTML = product.title;
    const amount = document.createElement("p");
    amount.innerHTML = "Amount: " + product.amount;
    const sum = document.createElement("p");
    sum.innerHTML = String(product.amount * product.price);

    productsContainer.append(img, title, amount, sum);
    orderviewDiv?.appendChild(productsContainer);
  });
  const totalSum = document.createElement("p");

  let total = 0;
  products.forEach((product) => {
    total += product.price * product.amount;
  });
  totalSum.innerHTML = String(total);
  orderviewDiv?.appendChild(totalSum);
};
orderViewHMTL();
