import Collection from "@/Components/collection/Collection";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import Card from "./Card";

export default function index({ cards }) {

    console.log(cards);
    return (
        <GuestLayout>
            <Collection>
                {cards.map((card) => (
                    <Card
                        image={card.product.image}
                        {...card.product}
                        key={card.id}
                    />
                ))}
            </Collection>
        </GuestLayout>
    );
}
