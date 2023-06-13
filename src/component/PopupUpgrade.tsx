import React from 'react'
import { BsPlusLg } from "react-icons/bs";

interface PopUpProps {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupUpgrade: React.FC<PopUpProps> = ({ setShowPopup }) => {
    const closePopUp = () => {
        setShowPopup(false);
    };

    return (
        <div className="w-screen h-screen bg-gray-800 bg-opacity-50 absolute top-0 z-20 overflow-x-hidden ">
            <div className='flex justify-center items-center h-full mt-10'>

                <div className="w-1/2 px-8 pt-6 pb-8">
                    <div className="flex justify-center mb-5">
                        <form className="w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">

                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className=" input input-bordered input-warning w-full bg-white" />
                            </div>

                            <div className='mt-5 flex gap-5'>
                                <div>

                                    <label className="label">
                                        <span className="label-text">Upload KTP</span>
                                    </label>
                                    <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                    >
                                        <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                    </div>
                                </div>
                                <div>

                                    <label className="label">
                                        <span className="label-text">Upload NIB</span>
                                    </label>
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

export default PopupUpgrade