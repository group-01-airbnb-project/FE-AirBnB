import { BsPlusLg } from "react-icons/bs";
import { useState, useRef, ChangeEvent } from 'react';
interface PopUpProps {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpListing: React.FC<PopUpProps> = ({ setShowPopup }) => {
    const closePopUp = () => {
        setShowPopup(false);
    };
    
    // handle image cover
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }

        console.log("ini selected file handleUpload : ", selectedFile)
    };
    const handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
        
    };

    // handle images 1
    console.log("ini selected : ", selectedFile)
    console.log("ini privew : ", previewUrl)


    return (
        <div className="w-screen h-fit bg-gray-800 bg-opacity-50 absolute top-0 z-20 overflow-x-hidden ">
            <div className='flex justify-center items-center h-full mt-10'>

                <div className="w-1/2 px-8 pt-6 pb-8">
                    <div className="flex justify-center mb-5">
                        <form className="w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">

                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Name Listing</span>
                                </label>
                                <input type="text" placeholder="Name" className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="Location" className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Fasility</span>
                                </label>
                                <input type="text" placeholder="Location" className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-warning w-full" placeholder="Bio"></textarea>
                            </div>
                            <div className="mt-5">
                                <label className="label">
                                    <span className="label-text">Cover Image</span>
                                </label>
                                <div
                                    className="flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse"
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
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Images</span>
                                </label>
                                <div className='flex gap-3'>

                                    <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '>
                                        <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                    </div>
                                    <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                    >
                                        <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                    </div>
                                    <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                    >
                                        <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                    </div>
                                    <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                    >
                                        <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 mt-2">
                                <button
                                    onClick={closePopUp}
                                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Cencel
                                </button>
                                <button
                                    // onClick={HandlePopUp}
                                    className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Save
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopUpListing