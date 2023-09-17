import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Products from "./Partials/Products";
import { Link } from "@inertiajs/react";

const Tag = ({ children }) => {
    return (
        <div className="text-black lg:px-8 rounded-lg lg:py-4 bg-yellow w-max text-4xl font-semibold absolute rotate-[-8deg] bottom-0 right-0 lg:right-10">
            {children}
        </div>
    );
};

export default function Home() {
    return (
        <GuestLayout title="Inicio">
            <div className="flex justify-between mt-8 lg:mt-28 max-lg:flex-col items-center max-lg:gap-10">
                <div className="relative">
                    <h2 className="text-[42px] lg:text-7xl ">
                        TU ESTILO DE <br /> VIDA AHORA <br /> EN UNA
                    </h2>

                    <Tag>CARD</Tag>
                </div>

                <div className="lg:w-[420px] text-[22px] text-center ">
                    <p className="leading-[45px]">
                        Haz tu tarjeta de débito <br /> una extensión de tu
                        estilo <br /> con nuestras skins
                    </p>

                    <div className="grid lg:grid-cols-2 text-sm my-4 gap-2  w-full ">
                        <Link
                            className="py-3 lg:py-5 border rounded-lg"
                            href={"#"}
                        >
                            Crea tu Diseño
                        </Link>
                        <a
                            className="py-3 lg:py-5 border rounded-lg"
                            href={route("card-categories.index")}
                        >
                            Escoge un Diseño
                        </a>
                    </div>
                </div>
            </div>
            <Products />
        </GuestLayout>
    );
}
