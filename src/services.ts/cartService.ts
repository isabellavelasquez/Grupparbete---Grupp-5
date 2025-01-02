import { Product } from "../Models/Product";

export let cart:Map<Product, number> = new Map<Product, number>(JSON.parse(localStorage.getItem("Cart") || "[]"));

export const addToCart = (product: Product) => {
    let amount = cart.get(product);
    if(amount === undefined) {
        amount = 0;
    }
    cart.set(product, amount + 1);
    localStorage.setItem("Cart", JSON.stringify(Array.from(cart.entries())));    
}

