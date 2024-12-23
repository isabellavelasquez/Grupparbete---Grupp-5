import { Product } from "../Models/Product";

export const addToCart = (product: Product) => {
        let cart: Product[] = JSON.parse(localStorage.getItem("Product") || "[]");
        if(Array.isArray(cart))
        {
            cart.push(product);
            localStorage.setItem("Product", JSON.stringify(cart));
        }
    }