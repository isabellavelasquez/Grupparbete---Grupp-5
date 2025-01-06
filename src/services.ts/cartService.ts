import { products } from "../HTMLHelpers/productsOverview";
import { Product } from "../Models/Product";

export let cart:Map<string, number> = new Map<string, number>();

export const addToCart = (product: Product) => {
    loadCart();
    const currentAmount = cart.get(product.id) || 0;
    cart.set(product.id, currentAmount + 1);
    saveCart();
}
 
export const saveCart = () => {
    localStorage.setItem("Cart", JSON.stringify(Array.from(cart.entries())));   
}

export const loadCart = () => {
    cart = new Map<string, number>(JSON.parse(localStorage.getItem("Cart") || "[]"));
}

export const getProductFromID = (id: string) :Product | undefined => {
    for (let i = 0; i<products.length; i++) {
        if (id === products[i].id) {
            return products[i];
        }  
    };
    return undefined;
}
