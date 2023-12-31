import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import api from '../axios/RestApi';

import ProfilGet from './ProfileGet';
import ProfilEdit from './ProfilEdit';

const Profil = () => {
    const [Data, setData] = useState<any>([]);
    const [popUP, setPopUp] = useState(false);

    const [cookies] = useCookies();

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await api.GetUser(cookies.token);
                setData(response.data)


            } catch (error) {
                console.error("ini pesan error", error);

            }
        };

        fetchUsers();
    }, [cookies]);


    return (
        <>
            <div className='w-3/4 h-full'>
                <div className='h-screen flex justify-center'>
                    <div className='w-3/4'>
                        <div className='mt-5'>
                            <h1>Welcome <span className='font-bold'>{Data?.data?.fullname}</span></h1>
                        </div>

                        <ProfilGet setShow={setPopUp} />

                    </div>


                </div>

            </div>
            {popUP &&
                <ProfilEdit setPopUp={setPopUp} />}
        </>

    )
}

export default Profil