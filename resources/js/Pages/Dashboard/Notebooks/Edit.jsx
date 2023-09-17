import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import ImageInput from "@/Components/input/ImageInput";
import { router, useForm } from "@inertiajs/react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";

export default function Edit({ currentNotebook, notebookCategories }) {
    const { data, setData, setError, errors } = useForm({
        name: currentNotebook.product.name,
        price: currentNotebook.product.price,
        status: currentNotebook.product.status,
        description: currentNotebook.product.description,
        notebook_category_id: currentNotebook.notebook_category_id,
        file: "",
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("dashboard.notebooks.update"),
            {
                _method: "patch",
                id: currentNotebook.id,
                ...data,
            },
            {
                onError: setError,
                onSuccess: () => {
                    window.location.reload();
                },
            }
        );
    };

    console.log(currentNotebook);

    return (
        <form onSubmit={submit} className="lg:grid lg:grid-cols-2 gap-4">
            <div>
                <ImageInput
                    image={currentNotebook.product.image}
                    setData={setData}
                    data={data}
                    setDataValue="file"
                />
            </div>

            <div>
                <InputLabel htmlFor="notebook_category_id" value="Categoria" />
                <Dropdown
                    inputId="notebook_category_id"
                    value={data.notebook_category_id}
                    onChange={(e) => setData("notebook_category_id", e.value)}
                    options={notebookCategories}
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Seleccionar categoría"
                    className="w-full md:w-14rem"
                />
                <InputError message={errors.notebook_category_id} />
            </div>
            <div>
                <InputLabel htmlFor="name" value="Nombre" />
                <InputText
                    id="name"
                    className={`w-full ${errors.name ? "p-invalid" : ""}`}
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} />
            </div>
            <div>
                <InputLabel htmlFor="price" value="Precio" />
                <InputNumber
                    inputId="price"
                    value={data.price}
                    onValueChange={(e) => setData("price", e.value)}
                    mode="currency"
                    currency="BOB"
                    locale="es-BO"
                    className="w-full"
                />

                <InputError message={errors.price} />
            </div>
            <div className="col-span-2">
                <InputLabel htmlFor="description" value="Descripción" />
                <InputTextarea
                    id="description"
                    className={`w-full ${
                        errors.description ? "p-invalid" : ""
                    }`}
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                <InputError message={errors.description} />
            </div>

            <div className="flex justify-end gap-4 col-span-2">
                <Button label="Editar" type="submit" className="px-10" />
            </div>
        </form>
    );
}
