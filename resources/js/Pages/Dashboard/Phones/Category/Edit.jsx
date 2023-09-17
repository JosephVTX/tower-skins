import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import ImageInput from "@/Components/input/ImageInput";
import { router, useForm } from "@inertiajs/react";
import { Button } from "primereact/button";;
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";

export default function Edit({ currentPhoneCategory }) {
    const { data, setData, setError, errors } = useForm({
        name: currentPhoneCategory.name,
        slug: currentPhoneCategory.slug,
        description: currentPhoneCategory.description,
        file: "",
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("dashboard.phones-categories.update"),
            {   
                _method: "patch",
                id: currentPhoneCategory.id,
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

    return (
        <form onSubmit={submit} className="lg:grid lg:grid-cols-2 gap-4">
            <div className="col-span-2">
                <InputLabel htmlFor="file" value="Imagen" />
                <ImageInput setData={setData} data={data} image={currentPhoneCategory.template.demo} setDataValue="file" />
                <InputError message={errors.file} />
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
                <InputLabel htmlFor="slug" value="Slug" required />
                <InputText
                    id="slug"
                    className={`w-full ${errors.slug ? "p-invalid" : ""}`}
                    value={data.slug}
                    onChange={(e) => setData("slug", e.target.value)}
                    keyfilter={/^[a-z0-9]+(?:[_-][a-z0-9]+)*$/}
                />
                <InputError message={errors.slug} />
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
