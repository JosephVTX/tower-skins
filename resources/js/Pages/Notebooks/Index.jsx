import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { motion } from "framer-motion";
import { fatherCardAnimation } from "@/Animations/card.animation";
import { twMerge } from "tailwind-merge";
import Card from "./Card";

export default function index({ notebooks }) {
    console.log(notebooks);
    return (
        <GuestLayout>
            <motion.div
                {...fatherCardAnimation()}
                className={twMerge(
                    
                    "grid max-lg:place-items-center lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-flow-dense"
                )}
            >
                {notebooks.map((notebook) => (
                    <Card key={notebook.id}  image={notebook.product.image} {...notebook.product} />
                ))}
            </motion.div>
        </GuestLayout>
    );
}
