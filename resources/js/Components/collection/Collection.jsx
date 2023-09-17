import { motion } from "framer-motion";
import { fatherCardAnimation } from "@/Animations/card.animation";
import { twMerge } from "tailwind-merge";

export default function Collection({ children }) {
    return (
        <motion.div
            {...fatherCardAnimation()}
            className={twMerge(
                "grid max-lg:place-items-center lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-flow-dense"
            )}
        >
            {children}
        </motion.div>
    );
}
