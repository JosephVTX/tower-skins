import Card from "@/Components/card/Card";
import Collection from "@/Components/collection/Collection";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";

export default function Index({ phoneCategories }) {

    console.log(phoneCategories);
    return (
        <GuestLayout title="Celulares">
            <Collection>
                {phoneCategories.map((phoneCategory) => (
                    <Card key={phoneCategory.id} {...phoneCategory} routeValue="phone-categories.show" />
                ))}
            </Collection>
        </GuestLayout>
    );
}
