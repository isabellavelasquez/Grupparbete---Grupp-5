
import { cart, getProductFromID, loadCart, saveCart, } from "../services.ts/cartService";
import { theBackButton } from "./thebackbutton";

export const displayProductsInCart = (cart: Map<string, number>) => {

    if (cart.size === 0) {
        const cartIsEmptyText = document.createElement("p");
        (cartIsEmptyText as HTMLParagraphElement).innerHTML = "Your cart is empty";
        document.getElementById("productsInCartContainer")?.appendChild(cartIsEmptyText)
    }

    // else {
    //     const sortedProducts = Array.from(cart.entries()).sort(([productA], [productB]) => 
    //     productA.title.localeCompare(productB.title))
    else {
        for (const [id] of cart) { 

            const product = getProductFromID(id);
            if (product === undefined) {
            continue;
            }
            
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
            (quantity as HTMLParagraphElement).innerHTML = String(cart.get(id)) + "x";

            const deleteButton = document.createElement("img");
            deleteButton.src = "assets/icons/trash_can.png"

            productInCartContainer.append(productImgInCart, title, price, quantity, deleteButton);

            deleteButton.addEventListener("click", () => {
                cart.delete(id);
                saveCart();
                const entireCart = document.getElementById("productsInCartContainer");
                (entireCart as HTMLDivElement).innerHTML = "";
                displayProductsInCart(cart);
            }) 
        }
        const checkoutButton = document.createElement("button");
        (checkoutButton as HTMLButtonElement).innerHTML = "Proceed to checkout";
        document.getElementById("productsInCartContainer")?.appendChild(checkoutButton).addEventListener("click", () => {
            window.location.href = "../../src/pages/usercheckout.html";
        });
    }
};
loadCart();
displayProductsInCart(cart);
theBackButton("../../assets/icons/back.arrow.png", "backbutton");
