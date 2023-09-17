import { childrenCardAnimation } from "@/Animations/card.animation";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Card({ template, name, routeValue, slug }) {
    return (
        <motion.div
            {...childrenCardAnimation}
            className="card w-full bg-base-100 shadow-xl border rounded-xl border-white/5"
        >
            <figure>
                <img
                    src={template.demo}
                    className="aspect-square object-cover object-center"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <div className="card-actions justify-end">
                    <Link
                        href={routeValue ? route(routeValue, slug) : "#"}
                        className="btn btn-primary uppercase"
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
