import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

async function getProducts() {
    const products = await getDocs(collection(db, "products"));
    let productsArray = [];
    products.forEach(product => {
        productsArray.push(product.data());
    }
    );
    return productsArray;
}

export { getProducts };