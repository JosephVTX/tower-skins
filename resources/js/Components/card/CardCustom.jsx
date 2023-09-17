import { useFabricJSEditor, FabricJSCanvas } from "fabricjs-react";
import { fabric } from "fabric";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "usehooks-ts";
import { useForm } from "react-hook-form";

import { dataURItoBlob } from "@/Helpers/dataURItoBlob";

import EditCard from "./EditCard";

export default function Custom({ id }) {
    const { editor, onReady } = useFabricJSEditor();

    const [shopping, setShopping] = useLocalStorage("shopping", []);

    const onSubmit = () => {
        const canvas = editor.canvas;

        canvas.setOverlayImage(null);

        const imageDataURL = canvas.toDataURL();

        const blob = dataURItoBlob(imageDataURL);

        const formData = new FormData();

        formData.append("files", blob);
    };

    return (
        <div className="grid place-items-center gap-2 mb-28">
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                    <label className="input-group input-group-vertical">
                        <span>Cantidad</span>
                        <input
                            type="number"
                            className="input input-bordered h-10"
                        />

                        <span className="text-xs text-red-500">s</span>
                    </label>

                    <button className="btn h-full">Añadir al Carrito</button>
                </div>
            </form>
        </div>
    );
}
