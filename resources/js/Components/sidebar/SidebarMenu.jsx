import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowForward } from "react-icons/io";

const SidebarMenu = ({ items, marginLeft = 0, className = "text-[14px]" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSubMenu = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <ul className={`list-none ${className}`}>
            {items?.map((item, index) => (
                <li key={index} style={{ marginLeft }} className={`my-1`}>
                    <a
                        href={item.href ?? "#"}
                        onClick={() => item.submenu && toggleSubMenu(index)}
                        className={`block p-2 rounded hover:bg-[var(--surface-hover)] cursor-pointer ${
                            openIndex === index && "bg-[var(--surface-hover)]"
                        }`}
                    >
                        <span className="flex items-center">
                            {item.icon && (
                                <item.icon className="mr-2 text-2xl" />
                            )}
                            {item.label}
                            {item.submenu && (
                                <IoIosArrowForward
                                    className={`ml-auto h-4 w-4 transform ${
                                        openIndex === index
                                            ? "rotate-90"
                                            : "rotate-0"
                                    } transition-transform`}
                                />
                            )}
                        </span>
                    </a>
                    <Collapse
                        theme={{
                            collapse: "[transition:_height_400ms;]",
                        }}
                        isOpened={openIndex === index}
                    >
                        <SidebarMenu
                            items={item.submenu}
                            className="text-[14px]"
                            marginLeft={46} // Incrementa el marginLeft para submenús anidados
                        />
                    </Collapse>
                </li>
            ))}
        </ul>
    );
};

export default SidebarMenu;
