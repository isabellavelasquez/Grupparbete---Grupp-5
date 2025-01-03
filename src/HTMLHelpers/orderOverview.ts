import { Product } from "../Models/Product";
import "../styles/orderOverview.scss";

const orderviewDiv = document.getElementById("orderOverview");
const h3 = document.createElement("h3");
h3.innerHTML = "Your order";
orderviewDiv?.appendChild(h3);

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
    const productsContainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = product.imgSrc;
    img.alt = product.imgAlt;
    const title = document.createElement("h4");
    title.innerHTML = product.title;
    const amount = document.createElement("p");
    amount.innerHTML = "Amount: " + product.amount;
    amount.classList.add("pTagAmount");
    const sum = document.createElement("p");
    sum.innerHTML = String(product.amount * product.price) + " :-";
    sum.classList.add("sumPtag");

    productsContainer.append(img, title, amount, sum);
    orderviewDiv?.appendChild(productsContainer);
  });
  const totalSum = document.createElement("p");
  totalSum.classList.add("totalSum");

  let total = 0;
  products.forEach((product) => {
    total += product.price * product.amount;
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
orderViewHMTL();
