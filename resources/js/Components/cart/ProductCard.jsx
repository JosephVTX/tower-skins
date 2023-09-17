import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { router } from "@inertiajs/react";

export default function ProductCard({ attributes, name, quantity, id }) {
    const handleDecrement = () => {
        if (quantity > 1) {
            router.patch("/cart", {
                id,
                quantity: quantity - 1,
            });
        }
    };

    const handleIncrement = () => {
        router.patch(`/cart`, {
            id,
            quantity: quantity + 1,
        });
    };

    const handleDelete = () => {
        router.delete(`/cart`, {
            data: {
                id,
            }
        });
    };

    return (
        <div className="flex  border w-full h-32 items-center relative  ">
            <AiOutlineClose
                onClick={handleDelete}
                className="text-white absolute right-2 top-2 cursor-pointer"
            />
            <div className="bg-white h-full basis-[110px] ">
                <img
                    className="h-full object-cover"
                    src={attributes.image}
                    alt=""
                />
            </div>
            <div className="space-y-4 p-2 grow ">
                <p className="text-sm">{name}</p>

                <div className="flex justify-between items-center">
                    <div className="flex">
                        <button
                            onClick={handleDecrement}
                            className="center-flex h-[30px] w-[30px] rounded-full border"
                        >
                            <span className="text-xl font-thin">−</span>
                        </button>
                        <input
                            type="text"
                            readOnly
                            className=" text-center w-[40px]  font-semibold text-md  md:text-basecursor-default flex items-center bg-transparent  outline-none"
                            value={quantity}
                        />
                        <button
                            onClick={handleIncrement}
                            className="center-flex h-[30px] w-[30px]  rounded-full border"
                        >
                            <span className="text-xl font-thin">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
