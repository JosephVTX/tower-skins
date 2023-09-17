import React from "react";
import { childrenCardAnimation } from "@/Animations/card.animation";
import Collection from "@/Components/collection/Collection";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const Card = ({ name, imgSrc, slug }) => {
    return (
        <motion.div
            {...childrenCardAnimation}
            className="card w-full bg-base-100 shadow-xl border rounded-xl border-white/5"
        >
            <figure>
                <img src={imgSrc} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <div className="card-actions justify-end">
                    <Link
                        href={route("card-categories.show", slug)}
                        className="btn btn-primary uppercase"
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default function index({ cardCategories }) {
    console.log(cardCategories);

    return (
        <GuestLayout title="Tarjetas">
            <Collection>
                {cardCategories.map((cardCategory) => (
                    <Card
                        imgSrc={cardCategory.template.demo}
                        key={cardCategory.id}
                        {...cardCategory}
                    />
                ))}
            </Collection>
        </GuestLayout>
    );
}
