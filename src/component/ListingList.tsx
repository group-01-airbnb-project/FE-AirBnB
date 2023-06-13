
import Card from '../component/Card'
import { useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
import PopUpListing from '../component/PopUpListing';

const ListingList = () => {
    const [showPopup, setShowPopup] = useState(false);
    const HandlePopUp = () => {
        setShowPopup(!showPopup);
    }

    return (
        <>
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
                        onClick={HandlePopUp}
                    >
                        
                        <span className='hover:animate-bounce text-8xl text-primary'><BsPlusLg /></span>

                    </div>
                </div>
            </div>
            {showPopup && (
                <PopUpListing setShowPopup={setShowPopup} />
            )}
        </>
    )
}

export default ListingList