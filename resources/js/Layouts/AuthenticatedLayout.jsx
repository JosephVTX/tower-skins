import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-dark-indigo/theme.css"

import Sidebar from "@/Components/sidebar/Sidebar";
import React from "react";

export default function AuthenticatedLayout({ children}) {
    return (
        <>
            <Sidebar />

            <div className="ml-2 lg:ml-[calc(256px+1rem)] pr-2 lg:pr-4 pt-4 space-y-4">
                <div>{children}</div>
            </div>
        </>
    );
}
