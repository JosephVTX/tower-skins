import Card from "@/Components/card/Card";
import Collection from "@/Components/collection/Collection";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";

export default function index({ cardCustoms }) {
    return (
        <GuestLayout>
            <Collection>
                {cardCustoms.map((cardCustom) => (
                    <Card
                        imgSrc={cardCustom.template.demo}
                        key={cardCustom.id}
                        {...cardCustom}
                    />
                ))}
            </Collection>
        </GuestLayout>
    );
}
