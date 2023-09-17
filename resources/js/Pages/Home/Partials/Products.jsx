import { motion } from "framer-motion";


import { leftRightAnimation } from "@/Animations/leftRight.animation";
import {
    childrenCardAnimation,
    fatherCardAnimation,
} from "@/Animations/card.animation";

import { BsArrowRight } from "react-icons/bs";
import Slider from "@/Components/core/Slider";

const ProductCard = ({ imgSrc, title, href }) => {
    return (
        <motion.div {...childrenCardAnimation}>
            <div className="w-[20rem] h-[28rem] border border-white/10 mx-auto rounded-3xl p-4">
                <h4 className="text-center text-2xl">{title}</h4>

                <a
                    className="flex justify-center gap-4 items-center my-4"
                    href={href ?? "#"}
                >
                    Ir a Tienda <BsArrowRight />
                </a>

                <div className="mt-8 rounded-3xl overflow-hidden">
                    <img src={imgSrc} alt="Category" />
                </div>
            </div>
        </motion.div>
    );
};

export default function Products() {
    return (
        <div>
            <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-10">
                <Slider />

                <img className="h-60 lg:h-96" src="/img/icon_ts.webp" alt="" />
            </div>
            <div className="mt-48">
                <h2 className="text-center text-2xl lg:text-4xl">
                    NUESTROS PRODUCTOS
                </h2>

                <div>
                    <div className="grid lg:grid-cols-2 my-8 gap-4 items-center place-content-center place-items-center">
                        <motion.h4
                            {...leftRightAnimation(true, 0.8, "-40%")}
                            className="text-xl lg:text-3xl text-center"
                        >
                            Es sencillo! <br /> Elige, Pégalo y extiéndelo{" "}
                            <br /> Dile adiós a tus tarjetas <br />
                            Aburridas.
                        </motion.h4>
                        <motion.iframe
                            {...leftRightAnimation(true, 0.8, "40%")}
                            className="rounded-xl lg:w-[460px] lg:h-[250px] w-[360px] h-[200px]"
                            src="https://www.youtube.com/embed/WVItmZJlB5U"
                        />
                    </div>
                </div>

                <motion.div
                    {...fatherCardAnimation(true)}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8"
                >
                    <ProductCard
                        imgSrc="/img/card.webp"
                        title="Skins"
                        href="/cards"
                    />

                    <ProductCard
                        imgSrc="/img/phone.webp"
                        title="Celulares"
                        href="/phones"
                    />

                    <ProductCard
                        imgSrc="/img/notebook.webp"
                        title="Cuardernos"
                        href="/notebooks"
                    />
                </motion.div>
            </div>
        </div>
    );
}
