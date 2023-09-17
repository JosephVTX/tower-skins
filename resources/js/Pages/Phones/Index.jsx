import Collection from "@/Components/collection/Collection";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import Card from "./Card";

export default function index({ phones }) {
    return (
        <GuestLayout>
            <Collection>
                {phones.map((phone) => (
                    <Card
                        image={phone.product.image}
                        {...phone.product}
                        key={phone.id}
                    />
                ))}
            </Collection>
        </GuestLayout>
    );
}
