import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import api from '../axios/RestApi';

import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const schema = Yup.object({
    name: Yup.string().required("email required"),
    email: Yup.string().required("Password required"),
    phone: Yup.string().required("Password required"),
    address: Yup.string().required("Password required"),
});


interface PopUpProps {
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfilEdit: React.FC<PopUpProps> = ({ setPopUp }) =>{
    const [Data, setData] = useState<any>([]);
    
    const closePopUp = () => {
        setPopUp(false);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
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
        <div className='w-screen h-screen bg-gray-800 bg-opacity-50 absolute top-0 z-20 overflow-x-hidden flex justify-center items-center '>
            <div className='w-1/2 bg-white p-3 rounded-xl'>
            <div className="mt-5">
                <label htmlFor="user" className="label">
                    Your Name
                </label>
                <input
                    type="text"
                    id="user"
                    name="name"
                    placeholder="Username"
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    required
                    className="input input-bordered input-warning w-full"
                />
            </div>

            <div className='mt-5'>
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full" />
            </div>
            <div className='mt-5'>
                <label className="label">
                    <span className="label-text">Your Phone</span>
                </label>
                <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full" />
            </div>
            <div className='mt-5'>
                <label className="label">
                    <span className="label-text">Your Address</span>
                </label>
                <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full" />
            </div>
            <div className='mt-5 font-bold flex justify-end'>

                <button className="btn bg-gray-800 mr-5 mb-5 text-white" onClick={closePopUp}>Cencel</button>
                <button className="btn btn-warning mb-5 text-white">Save</button>

            </div>
            </div>
            
        </div>
    )
}

export default ProfilEdit