
import {
    BsFileEarmarkSpreadsheet, BsFillPhoneFill,
} from "react-icons/bs";

import { BiSolidDashboard } from "react-icons/bi";

import SidebarMenu from "./SidebarMenu";
import { AiFillCreditCard } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";

const menuItems = [
    {
        label: "Dashboard",
        href: "#",
        icon: BiSolidDashboard,
    },
    {
        label: "Tarjetas",
        icon: AiFillCreditCard,
        submenu: [
            {
                label: "Categorías",
                href: "#",
            },
            {
                label: "Tarjetas",
                href: "#",
            },
        ],
    },
    {
        label: "Cuadernos",
        icon: GiNotebook,
        submenu: [
            {
                label: "Categorías",
                href: "#",
            },
            {
                label: "Cuadernos",
                href: "#",
            }
        ],

        
    },
    {
        label: "Teléfonos",
        icon: BsFillPhoneFill,
        submenu: [
            {
                label: "Categorías",
                href: route("dashboard.phones-categories.index"),
            },
            {
                label: "Teléfonos",
                href: route("dashboard.phones.index"),

            }

        ],
    }
];

export default function Sidebar() {
    return (
        <aside className="w-[256px] bg-surface-card h-screen fixed top-0 px-4 py-6 max-lg:-translate-x-full">
            <SidebarMenu items={menuItems} />
        </aside>
    );
}
