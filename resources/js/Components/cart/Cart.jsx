import React, { useMemo, useState, useEffect } from "react";

import ProductCard from "./ProductCard";

export default function Cart({ cart, total }) {
    //no change order Object.keys(cart)

    const desiredOrder = useMemo(() => {
        return Object.keys(cart).sort((a, b) => {
            if (cart[a].name > cart[b].name) {
                return 1;
            } else if (cart[a].name < cart[b].name) {
                return -1;
            } else {
                return 0;
            }
        });
    }, [cart]);

    return (
        <div className="w-[375px] lg:w-[600px] mx-auto mt-8 ">
            <div className="space-y-2">
                {desiredOrder.map((key) => {
                    return <ProductCard key={key} {...cart[key]} />;
                })}
            </div>

            <p className="flex justify-between text-xl my-4">
                Total: <span>Bs {total}</span>
            </p>

            <button
                onClick={() => {}}
                className="w-full py-4 bg-white text-black rounded-full"
            >
                PAGAR
            </button>
        </div>
    );
}
