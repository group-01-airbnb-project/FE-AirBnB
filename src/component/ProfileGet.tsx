import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import api from '../axios/RestApi';

interface PopUpProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfilGet: React.FC<PopUpProps> = ({ setShow }) =>{
    const [Data, setData] = useState<any>([]);
    
    const [cookies] = useCookies();
    const closePopUp = () => {
        setShow(true);
    };


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
        <div>
            <div>

                <div className='gap-2'>
                    <div className='flex w-full h-10 border-2 p-2 mt-5 rounded-xl'>
                        <div className='flex items-center w-1/3 h-full'>
                            <p className='ml-4'>Username</p>
                        </div>
                        <div className='flex items-center w-2/3 h-full'>
                            <p>{Data?.data?.username}</p>
                        </div>
                    </div>
                    <div className='flex w-full h-10 border-2 p-2 mt-5 rounded-xl'>
                        <div className='flex items-center w-1/3 h-full'>
                            <p className='ml-4'>Your Email</p>
                        </div>
                        <div className='flex items-center w-2/3 h-full'>
                            <p>{Data?.data?.email}</p>
                        </div>
                    </div>
                    <div className='flex w-full h-10 border-2 p-2 mt-5 rounded-xl'>
                        <div className='flex items-center w-1/3 h-full'>
                            <p className='ml-4'>Phone</p>
                        </div>
                        <div className='flex items-center w-2/3 h-full'>
                            <p>{Data?.data?.phone}</p>
                        </div>
                    </div>
                    <div className='flex w-full h-10 border-2 p-2 mt-5 rounded-xl'>
                        <div className='flex items-center w-1/3 h-full'>
                            <p className='ml-4'>Address</p>
                        </div>
                        <div className='flex items-center w-2/3 h-full'>
                            <p>{Data?.data?.address}</p>
                        </div>
                    </div>
                    <div className='flex w-full h-10 border-2 p-2 mt-5 rounded-xl'>
                        <div className='flex items-center w-1/3 h-full'>
                            <p className='ml-4'>Member</p>
                        </div>
                        <div className='flex items-center w-2/3 h-full'>
                            <p>{Data?.data?.role}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 font-bold flex justify-end'>
                    <button className="btn btn-warning mb-5 text-white" onClick={closePopUp}>Edit</button>
                </div>
            </div>

        </div>
    )
}

export default ProfilGet