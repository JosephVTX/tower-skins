import { childrenCardAnimation } from "@/Animations/card.animation";
import { Link, router } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Card(props) {
    const { name, price, image, id } = props;

    const handleAddCart = () => {
        const data = {
            id: `${props.producteable_type}|${props.producteable_id}`,
            name: props.name,
            price: props.price,
            image: props.image,
            quantity: 1,
            attributes: {
                image: props.image,
                description: props.description,
            },
        };

        router.post("/cart", data);
    };

    return (
        <motion.div
            {...childrenCardAnimation}
            className="card w-full bg-base-100 shadow-xl border rounded-xl border-white/5"
        >
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">BS {price}</h2>

                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddCart}
                        className="btn btn-primary uppercase"
                    >
                        COMPRAR
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
