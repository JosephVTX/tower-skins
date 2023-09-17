import EditCard from "@/Components/card/EditCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import React from "react";

export default function Show({ cardCustom }) {
    const { editor, onReady } = useFabricJSEditor();
    return (
        <GuestLayout>
            <div className="grid place-content-center">
                <EditCard
                    editor={editor}
                    FabricJSCanvas={FabricJSCanvas}
                    fabric={fabric}
                    imgSrc="https://lh3.googleusercontent.com/d/1IWUDPTAAtnfN5Buh0H9yvR6aQf7tP1nr"
                    onReady={onReady}
                />
            </div>
        </GuestLayout>
    );
}
