import { Product } from "../Models/Product";

export const addToCart = (product: Product) => {
        let cart:Map<string, number> = new Map<string, number>(JSON.parse(localStorage.getItem("Cart") || "[]"));
        let cartTotal = cart.get(product.id);
        if(cartTotal === undefined) {
            cartTotal = 0;
        }
        cart.set(product.id, cartTotal + 1);
        localStorage.setItem("Cart", JSON.stringify(Array.from(cart.entries())));
        console.log(cart);
    }

