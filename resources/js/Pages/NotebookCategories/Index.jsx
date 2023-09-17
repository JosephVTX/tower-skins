import Card from "@/Components/card/Card";
import Collection from "@/Components/collection/Collection";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";

export default function Index({ notebookCategories }) {

    console.log(notebookCategories);
    return (
        <GuestLayout title="Cuadernos">
            <Collection>
                {notebookCategories.map((notebookCategory) => (
                    <Card key={notebookCategory.id} {...notebookCategory} routeValue="notebook-categories.show" />
                ))}
            </Collection>
        </GuestLayout>
    );
}
