import { useState } from 'react';
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import { BsPlusLg } from "react-icons/bs";

const UserprofilPage = () => {
    const [listing, setlisting] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState(false);

    const HandleListing = () => {
        setlisting(false)
    }
    const HandleTrip = () => {
        setlisting(true)
    }
    const HandlePopUp = () => {
        setShowPopup(!showPopup);
    }

    return (
        <div className='w-screen h-screen top-0 overflow-x-hidden z-0'>
            <Navbar >
            <div className='flex justify-center h-fit'>
                <div className='flex justify-center w-1/4 h-screen shadow-lg p-4 sticky top-5'>
                    <div>
                        <div className="avatar">
                            <div className="w-52 rounded-full flex justify-center ml-3">
                                <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" />
                            </div>
                        </div>
                        <div className="mt-3 mb-3 border-t-4 border-primary"></div>
                        <div className='flex justify-center text-3xl font-bold'>
                            <p>John Doe</p>
                        </div>
                        <div className='mt-5 font-bold'>
                            <button className="btn btn-warning mb-5 w-full text-white" onClick={HandleListing}>Listing List</button>
                            <button className="btn btn-warning mb-5 w-full text-white" onClick={HandleTrip}>Trip History</button>

                        </div>
                    </div>

                </div>
                {listing === false ?
                    <div className='w-3/4 h-full'>
                        <div className='h-screen bg-gray-100 flex justify-center'>
                            <div className='w-3/4'>
                                <div className='mt-5'>
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                                </div>
                                <div className='mt-5'>
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                                </div>
                                <div className='mt-5'>
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                                </div>
                                <div className='mt-5'>
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                                </div>
                                <div className='mt-5 font-bold flex justify-end'>

                                    <button className="btn btn-warning mb-5 text-white">Save</button>

                                </div>

                            </div>

                        </div>

                    </div> :
                    <div className='w-3/4 h-full'>
                        <div className='flex flex-wrap gap-3 mb-10 p-3'>
                            <Card
                                image='https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675'
                                name='Filla Puncak Bogor'
                                price="Rp.199.000"
                                feature='2 kamar tidur + AC + WIFI'
                                rating='4,5'
                            />
                            <Card
                                image='https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675'
                                name='Filla Puncak Bogor'
                                price="Rp.199.000"
                                feature='2 kamar tidur + AC + WIFI'
                                rating='4,5'
                            />
                            <Card
                                image='https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675'
                                name='Filla Puncak Bogor'
                                price="Rp.199.000"
                                feature='2 kamar tidur + AC + WIFI'
                                rating='4,5'
                            />

                            <div className=' flex justify-center items-center w-80 h-80 mt-10 ml-5 border-dashed border-4 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                onClick={HandlePopUp}>
                                <span className='hover:animate-bounce text-8xl text-primary'><BsPlusLg /></span>

                            </div>
                        </div>
                    </div>}
            </div>
            </Navbar>

            {showPopup && (
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
                                    <div className='mt-5'>
                                        <label className="label">
                                            <span className="label-text">Cover Image</span>
                                        </label>
                                        <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                            onClick={HandlePopUp}>
                                            <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <label className="label">
                                            <span className="label-text">Images</span>
                                        </label>
                                        <div className='flex gap-3'>

                                        <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                            onClick={HandlePopUp}>
                                            <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                        </div>
                                        <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                            onClick={HandlePopUp}>
                                            <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                        </div>
                                        <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                            onClick={HandlePopUp}>
                                            <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                        </div>
                                        <div className=' flex justify-center items-center w-20 h-20 border-dashed border-2 rounded-xl border-primary bg-gray hover:cursor-pointer hover:animate-pulse '
                                            onClick={HandlePopUp}>
                                            <span className='hover:animate-bounce text-2xl text-primary'><BsPlusLg /></span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end gap-3 mt-2">
                                        <button
                                            onClick={HandlePopUp}
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

            )}
        </div>
    )
}

export default UserprofilPage