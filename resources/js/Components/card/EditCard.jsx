import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { IoTextSharp } from "react-icons/io5";

import FontPicker from "font-picker-react";

export default function EditCard({
    editor,
    onReady,
    FabricJSCanvas,
    fabric,
    imgSrc,
}) {
    const draggableRef = React.useRef();
    const ref = React.useRef();
    const [openAddText, setOpenAddText] = useState(false);
    const [textColor, setTextColor] = useState("#ffffff");
    const [font, setFont] = useState("Open Sans");
    const [textValue, setTextValue] = useState("");
    const [optionsIsOpen, setOptionsIsOpen] = useState(false);

    const handleDeleteAll = () => {};
    const handleText = (textValue) => {
        const text = new fabric.Textbox(textValue, {
            top: 10,
            left: 10,
            textAlign: "center",
            fontSize: 20,
            fontFamily: font,
            fill: textColor,
        });

        editor.canvas.add(text);

        editor?.canvas.renderAll();
    };

    const handleDelete = () => {
        if (!editor?.canvas.getActiveObject()) return;

        editor?.canvas.remove(editor?.canvas.getActiveObject());
    };

    const handleRange = (e) => {
        if (!editor?.canvas.getActiveObject()) return;

        const value = e.target?.value;

        editor?.canvas.getActiveObject().set({
            scaleX: value / 100,
            scaleY: value / 100,
        });

        editor?.canvas.renderAll();
    };

    const handleImage = (e) => {
        const image = e.target.files[0];

        if (!image) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            fabric.Image.fromURL(e.target.result, (img) => {
                img.scaleToHeight(editor?.canvas.height);
                editor?.canvas.add(img);
            });
        };

        reader?.readAsDataURL(image);

        editor?.canvas.discardActiveObject();

        editor?.canvas.renderAll();
    };

    useEffect(() => {
        fabric.Image.fromURL(
            imgSrc,
            (img) => {
                editor?.canvas.setDimensions({
                    width: img.width * (300 / img.height),
                    height: 300,
                });

                img.scaleToWidth(editor?.canvas.width);
                img.scaleToHeight(editor?.canvas.height);

                editor?.canvas?.setOverlayImage(
                    img,
                    editor?.canvas.renderAll.bind(editor?.canvas)
                );
            },

            {
                crossOrigin: "anonymous",
            }
        );

        editor?.canvas?.renderAll();
    }, [editor, fabric]);

    const handleView = () => {
        const obj = editor?.canvas.getActiveObject();

        if (!obj) return;

        editor?.canvas.discardActiveObject(obj);

        editor?.canvas.renderAll();
    };

    return (
        <main className="flex justify-center w-max">
            <div className="grid gap-2 relative">
                {openAddText ? (
                    <Draggable nodeRef={draggableRef} handle=".handle">
                        <div
                            ref={draggableRef}
                            className="absolute top-0 -right-[80%] z-10 "
                        >
                            <div className="grid w-[400px] ">
                                <AiOutlineClose
                                    onClick={() => setOpenAddText(false)}
                                    className="absolute right-0 top-0 p-1 text-2xl text-white cursor-pointer"
                                />
                                <div className="handle bg-black text-white p-2 text-center cursor-move rounded-md">
                                    Agregar Texto
                                </div>
                                <textarea
                                    onChange={(e) =>
                                        setTextValue(e.target.value)
                                    }
                                    className={`p-2 resize-none outline-none bg-base-200 h-[80px] apply-font`}
                                    style={{ color: textColor }}
                                />

                                <div className="flex justify-between gap-4 w-full bg-semiDark items-center py-4 px-4">
                                    <div className="w-max relative bg-semiDark  text-gray-200">
                                        <label
                                            htmlFor="color"
                                            className='relative font-bold before:absolute before:content-[""] before:w-full  before:h-[3px] before:-bottom-[2px] before:bg-blue-400  before:left-0  cursor-pointer'
                                        >
                                            A
                                        </label>
                                        <input
                                            type="color"
                                            defaultValue={textColor}
                                            onChange={(e) =>
                                                setTextColor(e.target.value)
                                            }
                                            id="color"
                                            className="invisible absolute left-0 top-0"
                                        />
                                    </div>

                                    <div className="text-black [&_.dropdown-button]:!bg-base-200 [&_.dropdown-font-family]:!text-primary-content ">
                                    <FontPicker
                                        activeFontFamily={font}
                                        onChange={(nextFont) =>
                                            setFont(nextFont.family)
                                        }
                                        apiKey="AIzaSyCtu0bbkyyb7tgmei2M2T3vqsXyLOAA6Fs"
                                    />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <input
                                        type="button"
                                        value="Agregar"
                                        onClick={() => handleText(textValue)}
                                        className="bg-black text-white py-2 hover:bg-gray-800"
                                    />

                                    <input
                                        type="button"
                                        value="Agregar"
                                        onClick={() => setOpenAddText(false)}
                                        className="bg-black text-white py-2 hover:bg-gray-800 cancel"
                                    />
                                </div>
                            </div>
                        </div>
                    </Draggable>
                ) : (
                    <></>
                )}
                <ul className="grid grid-cols-3  bg-black text-white gap-2 rounded-md text-[15px]">
                    <li>
                        <label
                            htmlFor="addImage"
                            className="flex justify-center items-center gap-2 py-2 cursor-pointer hover:bg-gray-800"
                        >
                            <BiImageAdd />
                            Imagen
                        </label>
                    </li>
                    <li>
                        <label
                            onClick={() => setOpenAddText(true)}
                            className="flex justify-center items-center gap-2  py-2 cursor-pointer hover:bg-gray-800"
                        >
                            <IoTextSharp />
                            Texto
                        </label>
                    </li>

                    <li className="relative text-white">
                        <label
                            onClick={() => {
                                setOptionsIsOpen(true);
                            }}
                            className="flex justify-center h-full items-center gap-2  py-2 cursor-pointer hover:bg-base-200"
                        >
                            <BsThreeDotsVertical />
                            Opciones
                        </label>

                        {optionsIsOpen && (
                            <ul
                                onMouseLeave={() => setOptionsIsOpen(false)}
                                className="absolute left-0 bg-base-200 w-full px-2 z-10 text-white "
                            >
                                <li>
                                    <button
                                        onClick={handleDeleteAll}
                                        className="py-2"
                                    >
                                        Eliminar Todo
                                    </button>
                                </li>

                                <li>
                                    <button
                                        disabled={
                                            !editor.canvas.getActiveObject()
                                        }
                                        className={`${
                                            editor?.canvas.getActiveObject()
                                                ? "text-white"
                                                : "text-gray-700"
                                        } py-2`}
                                        onClick={() => {
                                            editor.canvas
                                                .getActiveObject()
                                                .sendToBack();
                                            editor.canvas.discardActiveObject();
                                        }}
                                    >
                                        Mover Atras
                                    </button>
                                </li>

                                <li>
                                    <button
                                        disabled={
                                            !editor.canvas.getActiveObject()
                                        }
                                        className={`${
                                            editor?.canvas.getActiveObject()
                                                ? "text-white"
                                                : "text-gray-700"
                                        } py-2`}
                                        onClick={() => {
                                            editor.canvas
                                                .getActiveObject()
                                                .bringToFront();
                                            editor.canvas.discardActiveObject();
                                        }}
                                    >
                                        Mover Adelante
                                    </button>
                                </li>
                                <li>
                                    <button
                                        disabled={
                                            !editor.canvas.getActiveObject()
                                        }
                                        className={`${
                                            editor?.canvas.getActiveObject()
                                                ? "text-white"
                                                : "text-gray-700"
                                        } py-2`}
                                        onClick={() => {
                                            editor.canvas
                                                .getActiveObject()
                                                .set({
                                                    selectable: false,
                                                });
                                            editor.canvas.discardActiveObject();
                                        }}
                                    >
                                        Fijar Elemento
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>

                <div
                    className="overflow-hidden rounded-3xl border-2 border-gray-900 w-max"
                    ref={ref}
                >
                    <FabricJSCanvas onReady={onReady} />
                </div>
                <div className="grid grid-cols-4 bg-black w-full py-2 place-items-center rounded-md">
                    <input
                        className="w-[80px] range range-primary"
                        onChange={handleRange}
                        type="range"
                        min={1}
                        max={200}
                    />
                    {/* <button onClick={handleDownload}>DOWNLOAD</button> */}
                    <button
                        className={`${
                            editor?.canvas.getActiveObject()
                                ? "text-white"
                                : "text-gray-700"
                        } flex justify-center gap-2 items-center`}
                        onClick={handleDelete}
                    >
                        <AiFillDelete />
                        Eliminar
                    </button>

                    <button
                        onClick={handleView}
                        className={`${
                            editor?.canvas.getActiveObject()
                                ? "text-white"
                                : "text-gray-700"
                        } flex justify-center gap-2 items-center`}
                        disabled={!editor?.canvas.getActiveObject()}
                    >
                        <FaSave />
                        Guardar
                    </button>

                    <input
                        type="button"
                        className="text-white flex justify-center gap-2 items-center"
                        onClick={() => {
                            const oj = editor.canvas.getObjects();

                            editor.canvas.remove(oj[oj.length - 1]);
                        }}
                    />
                </div>
            </div>
            <input id="addImage" onChange={handleImage} type="file" hidden />
        </main>
    );
}
