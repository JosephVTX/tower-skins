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

export default function Edit({ currentPhone, phoneCategories }) {
    const { data, setData, setError, errors } = useForm({
        name: currentPhone.product.name,
        price: currentPhone.product.price,
        status: currentPhone.product.status,
        description: currentPhone.product.description,
        phone_category_id: currentPhone.phone_category_id,
        file: "",
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("dashboard.phones.update"),
            {
                _method: "patch",
                id: currentPhone.id,
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

    console.log(currentPhone);

    return (
        <form onSubmit={submit} className="lg:grid lg:grid-cols-2 gap-4">
            <div>
                <ImageInput
                    image={currentPhone.product.image}
                    setData={setData}
                    data={data}
                    setDataValue="file"
                />
            </div>

            <div>
                <InputLabel htmlFor="phone_category_id" value="Categoria" required />
                <Dropdown
                    inputId="phone_category_id"
                    value={data.phone_category_id}
                    onChange={(e) => setData("phone_category_id", e.value)}
                    options={phoneCategories}
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Seleccionar categoría"
                    className="w-full md:w-14rem"
                />
                <InputError message={errors.phone_category_id} />
            </div>
            <div>
                <InputLabel htmlFor="name" value="Nombre" required />
                <InputText
                    id="name"
                    className={`w-full ${errors.name ? "p-invalid" : ""}`}
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} />
            </div>
            <div>
                <InputLabel htmlFor="price" value="Precio" required />
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
