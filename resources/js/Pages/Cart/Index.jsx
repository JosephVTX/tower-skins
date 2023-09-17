import Cart from "@/Components/cart/Cart";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Index({ cart, total }) {

    console.log(total, cart);
    
    return (
        <GuestLayout>
            <div>
                <h2 className="text-3xl center-flex gap-4">
                    {" "}
                    <span>
                        <FaShoppingCart />
                    </span>{" "}
                    CARRITO DE COMPRA
                </h2>
                <Cart total={total} cart={cart} />

               
            </div>
        </GuestLayout>
    );
}
