
import { addToCart, cart, getProductFromID, loadCart, removeFromCart, saveCart, } from "../services.ts/cartService";
import { theBackButton } from "./thebackbutton";

export const displayProductsInCart = (cart: Map<string, number>) => {

    if (cart.size === 0) {
        const cartIsEmptyText = document.createElement("p");
        (cartIsEmptyText as HTMLParagraphElement).innerHTML = "Your cart is empty";
        document.getElementById("productsInCartContainer")?.appendChild(cartIsEmptyText)
    }

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

            const minusBtn = document.createElement("button");
            minusBtn.innerHTML = "-";

            const plusBtn = document.createElement("button");
            plusBtn.innerHTML = "+";    

            plusBtn.addEventListener("click", () => {
                addToCart(product);
                quantity.innerHTML = String(cart.get(id)) + "x";
            })

            minusBtn.addEventListener("click", () => {
                let currentAmount = cart.get(product.id) || 0;

                if (currentAmount > 1) {
                    cart.set(product.id, currentAmount - 1);
                    saveCart();
                    quantity.innerHTML = String(cart.get(id)) + "x";
                }
                else {
                    removeFromCart(product);
                }
            });

            const deleteButton = document.createElement("img");
            deleteButton.id = "deleteButton";
            deleteButton.src = "../../assets/icons/trash_can.png"

            productInCartContainer.append(productImgInCart, title, price, quantity, plusBtn, minusBtn, deleteButton);

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
        checkoutButton.id = "checkoutButton";
        document.getElementById("productsInCartContainer")?.appendChild(checkoutButton).addEventListener("click", () => {
            window.location.href = "../../src/pages/usercheckout.html";
        });
    }
};
loadCart();
displayProductsInCart(cart);
theBackButton("../../assets/icons/back.arrow.png", "backbutton");
