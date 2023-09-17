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

const imageBodyTemplate = (rowData) => {
    return (
        <img
            src={rowData.product.image}
            alt={rowData}
            className="w-12 h-12 aspect-square object-center object-cover"
        />
    );
};

export default function Index({ notebooks, notebookCategories }) {
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    const [openModalCreate, setOpenModalCreate] = React.useState(false);
    const [currentNotebook, setCurrentNotebook] = React.useState(null);


    const actionTemplate = (rowData) => {
        return (
            <>
                <button
                    onClick={() => {
                        setOpenModalEdit(true);
                        setCurrentNotebook(rowData);
                    }}
                    className="p-button-rounded p-button-text p-button-plain p-mr-2"
                >
                    <i
                        className="pi pi-pencil"
                        style={{ color: "slateblue" }}
                    />
                </button>
            </>
        );
    };

    const { inputValue, setInputValue } = useSearch("dashboard.notebook.index");

    const startContent = (
        <>
            <Button
                label="Añadir"
                icon="pi pi-plus"
                className="mr-2"
                onClick={() => setOpenModalCreate(true)}
            />
        </>
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

    return (
        <AuthenticatedLayout>
            <Toolbar start={startContent} end={endContent} />
            <DataTable value={notebooks} tableStyle={{ minWidth: "50rem" }}>
                <Column header="Imagen" body={imageBodyTemplate} />
                <Column field="product.name" header="Nombre" />
                <Column field="notebook_category.name" header="Categoria" />
                <Column field="product.price" header="Precio" />
                <Column field="product.status" header="Estado" />
                <Column body={actionTemplate} header="Acciones" />
            </DataTable>

            <Dialog
                header="Editar Teléfono"
                visible={openModalEdit}
                className="lg:w-[80vh] w-[90vw]"
                onHide={() => setOpenModalEdit(false)}
            >
                <Edit
                    currentNotebook={currentNotebook}
                    notebookCategories={notebookCategories}
                />
            </Dialog>
            <Dialog
                header="Crear Teléfono"
                visible={openModalCreate}
                className="lg:w-[80vh] w-[90vw]"
                onHide={() => setOpenModalCreate(false)}
            >
                <Create notebookCategories={notebookCategories} />
            </Dialog>
        </AuthenticatedLayout>
    );
}
