import { useEffect, useState } from "react";

export default function ImageInput({
    setData,
    data,
    setDataValue = "file",
    image = "",
}) {
    const [imagePreview, setImagePreview] = useState(image);

    useEffect(() => {
        if (data[setDataValue]) {
            let reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result);
            };

            reader.readAsDataURL(data[setDataValue]);
        }
    }, [data[setDataValue]]);

    return (
        <div className="flex gap-4 ">
            <div>
                <div className="avatar border overflow-hidden border-primary-content/40">
                    <div className="w-32">
                        <img
                            src={
                                imagePreview.length > 0
                                    ? imagePreview
                                    : "/img/picture.png"
                            }
                            alt="Avatar Preview"
                        />
                    </div>
                </div>
            </div>

            <div className="flex  items-center gap-4">
                <div className="space-y-2">
                    <div>
                        <label htmlFor={setDataValue} className="btn btn-sm">
                            Subir Imagen
                        </label>

                        <input
                            id={setDataValue}
                            type="file"
                            onChange={(e) =>
                                setData(setDataValue, e.target.files[0])
                            }
                            hidden
                            accept=".jpg, .png, .webp, .jpeg"
                            // 1024KB

                            max-size="1024"
                        />
                    </div>
                    <div className="text-sm">JPG, PNG, WEBP. 2MB max.</div>
                </div>
            </div>
        </div>
    );
}
