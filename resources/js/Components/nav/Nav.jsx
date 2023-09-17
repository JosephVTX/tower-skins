import { Link, usePage } from "@inertiajs/react";
import React, { useRef, useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useOnClickOutside } from "usehooks-ts";

const nav = [
    {
        name: "INICIO",
        href: "/",
    },
    {
        name: "TARJETAS",
        href: route("card-categories.index"),
    },
    {
        name: "CELULARES",
        href: route("phone-categories.index"),
    },
    {
        name: "CUADERNOS",
        href: route("notebook-categories.index"),
    },
];

const Shop = ({ count }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.8}
            stroke="currentColor"
            className="w-6 h-6 md:w-10 md:h-10"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
            {count && (
                <text
                    x="12"
                    y="18"
                    fontSize={7}
                    letterSpacing={1}
                    textAnchor="middle"
                >
                    {count}
                </text>
            )}
        </svg>
    );
};

export default function Nav() {
    const { cart, auth } = usePage().props;

    const [openMenu, setOpenMenu] = useState(false);

    const menuRef = useRef(null);

    useOnClickOutside(menuRef, () => setOpenMenu(false));

    console.log(auth);
    return (
        <>
            <div className="container h-[128px] p-4">
                <nav className="flex justify-between items-center">
                    <a href="/">
                        <img
                            className="h-12 lg:h-14"
                            src="/img/logo.png"
                            alt="Tower Skins Logo"
                        />
                    </a>

                    <button
                        onClick={() => setOpenMenu(true)}
                        className={`lg:hidden cursor-pointer text-2xl ${
                            openMenu ? "pointer-events-none" : ""
                        }`}
                    >
                        <HiMenuAlt3 />
                    </button>
                    <div
                        ref={menuRef}
                        className={`transition-all duration-500 max-lg:fixed top-0 max-lg:h-screen bg-black z-[10] max-lg:w-[60%]  max-lg:p-4 ${
                            openMenu ? "left-0" : "-left-full"
                        }`}
                    >
                        <button
                            onClick={() => setOpenMenu(false)}
                            className="max-lg:absolute right-4 top-4 text-2xl lg:hidden"
                        >
                            <IoClose />
                        </button>

                        <ul
                            className={`lg:flex  gap-x-10 items-center max-lg:space-y-4`}
                        >   

                            
                            {nav.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}

                            <li>
                                <a href="/cart" className="max-md:flex  items-center gap-4">
                                    <span className="md:hidden">MI CARRITO</span> <Shop  count={Object.keys(cart).length} /> 
                                </a>
                            </li>
                            <li>
                                {

                                    auth.user ? (<Link className="lg:hidden" method="post" href={route("logout")}>CERRAR SESIÓN</Link>)

                                    : (<Link className="lg:hidden" href={route("login")}>INICIAR SESIÓN</Link>)
                                } 
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
