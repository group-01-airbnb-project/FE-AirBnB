import { useState } from 'react';
import Navbar from '../component/Navbar'
import TripPage from './TripPages';
import PopupUpgrade from '../component/PopupUpgrade';
import Profil from '../component/Profil';
import ListingList from '../component/ListingList';

const UserprofilPage = () => {
    const [listing, setlisting] = useState<string>("");
    const [popUPUpgrade, setPopUpUpgrade] = useState(false);

    const HandleListing = () => {
        setlisting("listing")
    }
    const HandleTrip = () => {
        setlisting("trip")
    }

    const HandlePopUpUpgrade = () => {
        setPopUpUpgrade(!popUPUpgrade);
    }

    return (
        <div className='w-screen h-screen top-0 overflow-x-hidden z-0'>
            <Navbar >
                <div className='flex justify-center h-fit'>
                    <div className='flex justify-center w-1/4 h-screen shadow-lg p-4 sticky top-5'>
                        <div className='p-10'>
                            <div className="avatar">
                                <div className="w-52 rounded-full flex justify-center ml-3">
                                    <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" />
                                </div>
                            </div>
                            <div className="mt-3 mb-3 border-t-4 border-primary"></div>
                            <div className='flex justify-center text-3xl font-bold hover:cursor-pointer' onClick={() => setlisting("")}>
                                <p>John Doe</p>
                            </div>
                            <div className='mt-5 font-bold'>
                                <div className="tooltip w-full" data-tip="Upgrade Acount To Listing your Homestay">

                                    <button className="btn btn-warning mb-5 w-full text-white" onClick={HandlePopUpUpgrade}>Upgrade Acount</button>
                                </div>
                                <button className="btn btn-warning mb-5 w-full text-white" onClick={HandleListing}>Listing List</button>
                                <button className="btn btn-warning mb-5 w-full text-white" onClick={HandleTrip}>Trip History</button>

                            </div>
                        </div>

                    </div>
                    {listing === "" ? <Profil/> : listing === "listing" ? <ListingList/>:<TripPage />}
                </div>
            </Navbar>

            {popUPUpgrade && (
                <PopupUpgrade setShowPopup={setPopUpUpgrade} />
            )}
        </div>
    )
}

export default UserprofilPage