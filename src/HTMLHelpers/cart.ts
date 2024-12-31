import { Product } from "../Models/Product";
import { cart } from "../services.ts/cartService";

const displayProductsInCart = (cart: Map<Product, number>) => {

    localStorage.getItem("Cart");
    for (const product of cart.keys()) { 

        const productInCartContainer = document.createElement("div");
        productInCartContainer.id = "productInCartContainer";
        document.getElementById("productsInCartContainer")?.appendChild(productInCartContainer);

        const productImgInCart = document.createElement("img");
        productImgInCart.src = product.imgSrc;
        productImgInCart.alt = product.imgAlt;
    
        const title = document.createElement("h2");
        (title as HTMLHeadingElement).innerHTML = product.title;
    
        const price = document.createElement("p");
        price.innerHTML = String(product.price) + " :-";
    
        const quantity = document.createElement("p");
        (quantity as HTMLParagraphElement).innerHTML = String(cart.get(product)) + "x";

        productInCartContainer.append(productImgInCart, title, price, quantity);

    };
}
displayProductsInCart(cart);