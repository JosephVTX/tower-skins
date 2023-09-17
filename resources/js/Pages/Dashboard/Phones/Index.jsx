import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Create from "./Create";
import { Dialog } from "primereact/dialog";
import Edit from "./Edit";
import { InputText } from "primereact/inputtext";
import useSearch from "@/Hooks/useSearch";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dropdown } from "primereact/dropdown";
import { router } from "@inertiajs/react";

const imageBodyTemplate = (rowData) => {
    return (
        <img
            src={rowData?.product.image}
            alt={rowData}
            className="w-12 h-12 aspect-square object-center object-cover"
        />
    );
};

export default function Index({ phones, phoneCategories }) {
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    const [openModalCreate, setOpenModalCreate] = React.useState(false);
    const [currentPhone, setCurrentPhone] = React.useState(null);
    const [deletePhoneDialog, setDeletePhoneDialog] = React.useState(false);

    console.log("FN", phoneCategories);


    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-4 max-lg:flex-col">
                <button
                    onClick={() => {
                        setOpenModalEdit(true);
                        setCurrentPhone(rowData);
                    }}
                    className="p-button-rounded p-button-text p-button-plain p-mr-2"
                >
                    <i
                        className="pi pi-pencil"
                        style={{ color: "paleturquoise" }}
                    />
                </button>
                <button
                    onClick={() => {
                        setDeletePhoneDialog(true);
                        setCurrentPhone(rowData);
                    }}
                    className="p-button-rounded p-button-text p-button-plain p-mr-2"
                >
                    <i className="pi pi-trash" style={{ color: "tomato" }} />
                </button>
            </div>
        );
    };

    const { inputValue, setInputValue } = useSearch("dashboard.phones.index");

    const {
        inputValue: inputValueCategory,
        setInputValue: setInputValueCategory,
    } = useSearch("dashboard.phones.index", "search", 200);

    const startContent = (
        <div className="flex gap-4">
            <Button
                label="Añadir"
                icon="pi pi-plus"
                className="mr-2"
                onClick={() => setOpenModalCreate(true)}
            />
            <Dropdown
                optionLabel="name"
                optionValue="id"
                placeholder="Buscar Categoría"
                options={phoneCategories}
                onChange={(e) => setInputValueCategory(e.value)}
                value={inputValueCategory}
            />

            <Button
                label="Limpiar"
                icon="pi pi-times"
                outlined
                onClick={() => {
                    setInputValueCategory(null);
                    setInputValue(null);

                    router.replace(route("dashboard.phones.index"));
                }}
            />
        </div>
    );

    const endContent = (
        <div className="flex items-center gap-4">
            <span className="relative">
                <i className="pi pi-search absolute top-1/2 -translate-y-1/2 ml-2" />
                <InputText
                    type="search"
                    placeholder="Buscar"
                    className="!pl-8"
                    value={inputValue ?? ""}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </span>
        </div>
    );

    const deleteSelectedItem = () => {
        router.delete(route("dashboard.phones.destroy", currentPhone.id), {
            onSuccess: () => window.location.reload(),
        });
    };

    const deleteFooter = (
        <>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={() => setDeletePhoneDialog(false)}
            />
            <Button
                label="Si"
                icon="pi pi-check"
                severity="danger"
                onClick={() => {
                    setDeletePhoneDialog(false);
                    deleteSelectedItem();
                }}
            />
        </>
    );

    return (
        <AuthenticatedLayout>
            <Toolbar start={startContent} end={endContent} />
            <DataTable
                value={phones}
                tableStyle={{ minWidth: "50rem" }}
                paginator
                scrollable
                scrollHeight="80vh"
                rows={20}
                className="p-mt-4"
            >
                <Column header="Imagen" body={imageBodyTemplate} />
                <Column sortable field="product.name" header="Nombre" />
                <Column
                    sortable
                    field="phone_category.name"
                    header="Categoria"
                />
                <Column sortable field="product.price" header="Precio" />
                <Column sortable field="product.status" header="Estado" />
                <Column body={actionTemplate} header="Acciones" />
            </DataTable>

            <Dialog
                header="Editar Teléfono"
                visible={openModalEdit}
                className="lg:w-[80vh] w-[90vw]"
                onHide={() => setOpenModalEdit(false)}
            >
                <Edit
                    currentPhone={currentPhone}
                    phoneCategories={phoneCategories}
                />
            </Dialog>
            <Dialog
                header="Crear Teléfono"
                visible={openModalCreate}
                className="lg:w-[80vh] w-[90vw]"
                onHide={() => setOpenModalCreate(false)}
            >
                <Create phoneCategories={phoneCategories} />
            </Dialog>

            <Dialog
                visible={deletePhoneDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Eliminar"
                onHide={() => setDeletePhoneDialog(false)}
                footer={deleteFooter}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {
                        <span>
                            ¿Seguro de eliminar{" "}
                            <b>{currentPhone?.product?.name}</b>?
                            <br />
                        </span>
                    }
                </div>
            </Dialog>
        </AuthenticatedLayout>
    );
}
