import { Product } from "../Models/Product";
import { cart } from "../services.ts/cartService";

const displayProductsInCart = (cart: Map<Product, number>) => {

    localStorage.getItem("Cart");
    console.log(cart);
    if (cart.size === 0) {
        const cartIsEmptyText = document.createElement("p");
        (cartIsEmptyText as HTMLParagraphElement).innerHTML = "Your cart is empty";
        document.getElementById("productsInCartContainer")?.appendChild(cartIsEmptyText)
        }

    else {
        const sortedProducts = Array.from(cart.entries()).sort(([productA], [productB]) => 
        productA.title.localeCompare(productB.title))
    
        for (const [product] of sortedProducts) { 

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
        }
        const checkoutButton = document.createElement("button");
        (checkoutButton as HTMLButtonElement).innerHTML = "Proceed to checkout";
        document.getElementById("productsInCartContainer")?.appendChild(checkoutButton).addEventListener("click", () => {
            window.location.href = "/usercheckout.html";
        })

    };
    
}
displayProductsInCart(cart);