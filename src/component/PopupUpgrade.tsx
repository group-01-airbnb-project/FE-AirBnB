import { useState, useRef, ChangeEvent } from 'react';
import { BsPlusLg } from "react-icons/bs";
import axios from 'axios';
import { useCookies } from "react-cookie";
import Swal from 'sweetalert2';
import Spin from '../assets/Infinity-1s-200px.svg'
interface PopUpProps {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupUpgrade: React.FC<PopUpProps> = ({ setShowPopup }) => {
    const closePopUp = () => {
        setShowPopup(false);
    };
    const [cookies, setCookie] = useCookies();
    // handle image cover
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('host_document', selectedFile);

        try {
            setLoading(true)
            const response = await axios.post(`https://group1.altapro.online/users/host-doc`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookies.token}`,
                }
            });
            setCookie('role', response.data?.data?.role);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Upgrade Acount Success',
                showConfirmButton: false,
                timer: 1800
              })
              setShowPopup(false);
        

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Gagal Upload Image",
              });
        } finally {
            setLoading(false)
        }
    };

    const handleFileUpload = () => {

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
        
    };

    const handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }

    };


    return (
        <div className="w-screen h-screen bg-gray-800 bg-opacity-50 absolute top-0 z-20 overflow-x-hidden ">
            <div className='flex justify-center items-center h-full mt-10'>

                <div className="w-1/2 h-1/2 px-8 pt-6 pb-8">
                    <div className="flex justify-center mb-5">
                        <form className="w-full h-96 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mt-5">
                                <label className="label">
                                    <span className="label-text">Cover Image</span>
                                </label>
                                <div
                                    className="flex justify-center items-center w-full h-52 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse"
                                    onClick={handleFileUpload}
                                >
                                    <input type="file" className="hidden" onChange={handleSelectedFile} ref={fileInputRef} />
                                    {previewUrl ? (
                                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                                    ) : (
                                        <span className="hover:animate-bounce text-2xl text-primary">
                                            <BsPlusLg />
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 mt-10">
                                <button
                                    onClick={closePopUp}
                                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Cencel
                                </button>
                                <button
                                    className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleUpload}
                                >
                                    {loading ?
                                        <img src={Spin} className="h-8 w-8" alt="Loading" /> : "Save"}
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopupUpgrade