import { Menu, Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import { FiMapPin } from "react-icons/fi";

import { FaUser } from "react-icons/fa";

const userNavigation = [
    { name: "Perfil", href: "#", method: "get" },
    { name: "Ajustes", href: "#", method: "get" },
    { name: "Ayuda", href: "#", method: "get" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const {
        auth: { user },
    } = usePage().props;

    return (
        <div className="lg:block bg-gray-100/5 max-lg:px-4">
            <div className="flex justify-between  max-lg:justify-end container max-lg:py-1 py-3 text-[13px]">
                <div>
                    <p className="flex items-center gap-2 ">
                        <FiMapPin /> Atención al Cliente: 62201302
                    </p>
                </div>
                {user ? (
                    <div className="ml-4 flex items-center md:ml-6">
                        <Menu as="div" className="relative ml-3 z-20 ">
                            <div>
                                {user.roles.length > 0 ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="link"
                                    >
                                        Ir a Dashboard
                                    </Link>
                                ) : (
                                    <Menu.Button className="flex max-w-xs items-center  text-sm">
                                        <div>
                                            <p className="font-medium flex items-center gap-4">
                                                <FaUser /> {user.name}
                                            </p>
                                        </div>
                                    </Menu.Button>
                                )}
                            </div>
                            <Transition
                                as={"div"}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <div className="absolute right-0 z-50 bg-base-100 p-2 mt-2 w-48 origin-top-right rounded-md shadow-lg ">
                                    <Menu.Items>
                                        {userNavigation.map((item) => (
                                            <Menu.Item
                                                as="li"
                                                className="hover:bg-surface-hover list-none"
                                                key={item.name}
                                            >
                                                {({ active }) => (
                                                    <Link
                                                        type="button"
                                                        method={item.method}
                                                        href={item.href}
                                                        className={classNames(
                                                            active
                                                                ? "bg-base-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm "
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                    <Link
                                        as="button"
                                        href={route("logout")}
                                        method="post"
                                        className="w-full  py-2 border-surface-border border-2 rounded-btn mt-2"
                                    >
                                        Cerrar sesión
                                    </Link>
                                </div>
                            </Transition>
                        </Menu>
                    </div>
                ) : (
                    <>
                        <div className="space-x-2 max-lg:hidden">
                            <Link href={route("login")} className="link">
                                Iniciar Sesión
                            </Link>
                            <span>/</span>
                            <Link href={route("register")} className="link">
                                Registrarse
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
