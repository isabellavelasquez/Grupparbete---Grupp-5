import { Product } from "../Models/Product";
import {
  addToCart,
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
  new Product(
    "Blue overshirt",
    400,
    "../../assets/products/Blueovershirt.png",
    "Blue overshirt",
    "A shirt with double fabric layers in a wool blend. Regular fit, chest pockets on the outside, and flat corozo buttons. Made of 60% RWS wool certified by Control Union (893290). Products certified according to the Responsible Wool Standard (RWS) contain wool fibers from farms that are certified according to animal welfare and land management requirements.",
    "blue-overshirt1",
    1
  ),
  new Product(
    "Blue Dress Shirt",
    200,
    "../../assets/products/blueshirtdress.png",
    "Blue Dress Shirt",
    "A cotton poplin shirt with a button placket, a chest pocket, buttoned cuffs, and a rounded hem. Loose fit.The model is 183cm/6'0 and wears size 50",
    "blue-dress-shirt1",
    1
  ),
  new Product(
    "Adidas sneakers",
    500,
    "../../assets/products/Adidas.png",
    "Adidas sneakers",
    "Adidas Spezial is an updated handball shoe from the late 70s. This modern version features a suede upper, ADIPRENE®+ for cushioning, and TORSION® SYSTEM for comfort and support.",
    "adidas-sneakers1",
    1
  ),
  new Product(
    "Workwear Jacket",
    300,
    "../../assets/products/beige jacket.png",
    "Workwear Jacket",
    "Workwear-inspired jacket in cotton canvas with a corduroy collar. Zipper at the front and buttoned cuffs. A chest pocket with a zipper, slanted front pockets, and an inner pocket. Regular fit.",
    "workwear-jacket1",
    1
  ),
  new Product(
    "Coral Denim Jeans",
    150,
    "../../assets/products/coral denim.png",
    "Coral Denim Jeans",
    "5-pocket jeans in washed stretch denim with a high waist, zip fly, and button. Slim legs with raw-edge hems.CORAL in non-stretch denim has a high waist, loose fit, and wide legs. CORAL in non-stretch denim has a high waist, loose fit, and wide legs.",
    "coral-denim-jeans1",
    1
  ),
  new Product(
    "The Park Denim",
    200,
    "../../assets/products/parkdenim.png",
    "The Park Denim",
    "PARK in non-stretch denim has a mid-rise waist, classic fit, and straight, slightly tapered legs from the knee down. Button fly.",
    "the-park-denim1",
    1
  ),
  new Product(
    "Redness T-shirt",
    100,
    "../../assets/products/Tshirtred.png",
    "Redness T-shirt",
    "Unisex t-shirt with print on the front and back. Short-sleeved t-shirt in medium-weight cotton jersey at 220 gsm. Boxy fit. This product is part of the C-J-FReY-ISSA CAFÉ collection with illustrations by Olga Prader.",
    "redness-tshirt1",
    1
  ),
  new Product(
    "V Dress",
    250,
    "../../assets/products/biege dress.png",
    "V Dress",
    "Knitted maxi dress in wool with a V-neck. Long sleeves and a straight silhouette. The dress contains 100% RWS wool (TE-00047206). Products certified according to the Responsible Wool Standard (RWS) contain wool fibers from farms that are certified according to animal welfare and land management requirements.",
    "v-dress1",
    1
  ),
  new Product(
    "Cash$mere",
    500,
    "../../assets/products/cash.png",
    "Cash$mere",
    "Turtleneck sweater in cashmere and a bit of merino wool for extra strength. Raglan sleeves and ribbed details.",
    "cashmere1",
    1
  ),
  new Product(
    "Tennis Shirt",
    200,
    "../../assets/products/tennisred.png",
    "Tennis Shirt",
    "Tennis shirt in cotton with a loose fit. The fabric has a looped back that has moisture-wicking properties. Collar and button placket. Ribbed cuffs.",
    "tennis-shirt1",
    1
  ),
  new Product(
    "The Brownie Sweatshirt",
    150,
    "../../assets/products/brownsweatshirt.png",
    "The Brownie Sweatshirt",
    "Sweatshirt in soft, organic cotton fabric with a printed design. Round neckline, long sleeves, and ribbing at the cuffs and hem. Soft, brushed inside.",
    "the-brownie-sweatshirt1",
    1
  ),
  new Product(
    "The Grayest Swedish Jacket",
    300,
    "../../assets/products/jacketgray.png",
    "The Grayest Swedish Jacket",
    "Jacket in a double-woven fabric of a wool blend. Stand-up collar, front button closure, and slanted flap pockets. The jacket contains 80% RWS wool (TE-00047206). Products certified according to the Responsible Wool Standard (RWS) contain wool fibers from farms that are certified according to animal welfare and land management requirements.",
    "the-grayest-swedish-jacket1",
    1
  ),
];

export const createProductsHTML = () => {
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productContainer");

    const poster = document.createElement("img");
    poster.src = product.imgSrc;
    poster.alt = product.imgAlt;

    const title = document.createElement("h2");
    (title as HTMLHeadingElement).innerHTML = product.title;

    const price = document.createElement("p");
    price.innerHTML = String(product.price) + " :-";

    const quickAddButton = document.createElement("button");
    quickAddButton.innerHTML = "Add to cart";
    quickAddButton.id = "qickAddButton";

    productDiv.append(poster, title, price, quickAddButton);

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

    poster.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "../src/pages/productPage.html";
    });
  });
};
