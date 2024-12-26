import { Product } from "./Models/Product";
import { addToCart } from "./services.ts/cartService";

export const products: Product[]  = [
    new Product("Shirt", 100,"assets/products/Blue shirt.png", "Blue Shirt", "blueshirt1"),
    new Product("Red dress", 250, "assets/products/Red dress.png", "Red Dress", "reddress1"),
    new Product("Boots", 300, "assets/products/Boots.png", "Boots", "boots1"), 
    new Product("Red bag", 250, "assets/products/Red bag.png", "Red bag", "redbag1")
]

export const createProductsHTML = () => {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.id = "productContainer";

        const image = document.createElement("img");
        image.src = product.imgSrc;
        image.alt = product.imgAlt;
        
        const title = document.createElement("h2");
        (title as HTMLHeadingElement).innerHTML = product.title;
        
        const price = document.createElement("p");
        price.innerHTML = String(product.price);

        const quickAddButton = document.createElement("button");
        quickAddButton.innerHTML = "Add to cart";
        quickAddButton.id = "qickAddButton";

        productDiv.append(image, title, price, quickAddButton);

        document.getElementById("productsContainer")?.appendChild(productDiv);

        quickAddButton.addEventListener("click", () => {
            addToCart(product);
        })

    });
    
}