import { BsPlusLg } from "react-icons/bs";
import { useState, useRef, ChangeEvent } from 'react';
import api from '../axios/RestApi';
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Swal
    from "sweetalert2";
const schema = Yup.object({

    title: Yup.string().required("required"),
    description: Yup.string().required("required"),
    location: Yup.string().required("required"),
    address: Yup.string().required("required"),
    price: Yup.number().typeError("must be a number"),
    facilities: Yup.string().required("required"),
});

interface PopUpProps {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpListing: React.FC<PopUpProps> = ({ setShowPopup }) => {
    
    const [loading, setLoading] = useState<boolean>(false)
    // const navigate = useNavigate();
    const [cookies] = useCookies();

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            location: "",
            address: "",
            price: 0,
            facilities: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const createHandle = async (): Promise<void> => {
        const { 
            title, 
            description, 
            location, 
            address, 
            price, 
            facilities } = formik.values;

        try {
          setLoading(true)
          const response = await api.CreateHome(
            cookies.token, 
            title, 
            description, 
            location, 
            address, 
            price, 
            facilities,
          );

          console.log(response.data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (error) {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Gagal Menambahkan Data!",
          });
        } finally {
          setLoading(false)
          console.log(formik.values.price)
        }
      }
      
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
console.log(loading)

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
                                <input
                                    type="text"
                                    id="name"
                                    name="title"
                                    placeholder="Title Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    required
                                    className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    placeholder="Price"
                                    onChange={formik.handleChange}
                                    value={formik.values.price}
                                    required
                                    className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder="Location"
                                    onChange={formik.handleChange}
                                    value={formik.values.location}
                                    required
                                    className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="address"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    required
                                    className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Fasility</span>
                                </label>
                                <input
                                    type="text"
                                    id="facilities"
                                    name="facilities"
                                    placeholder="Facilities"
                                    onChange={formik.handleChange}
                                    value={formik.values.facilities}
                                    required
                                    className=" input input-bordered input-warning w-full bg-white" />
                            </div>
                            <div className='mt-5'>
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                    className="textarea textarea-warning w-full bg-white"
                                    placeholder="Deskription"></textarea>
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
                           
                            <div className="flex items-center justify-end gap-3 mt-2">
                                <button
                                    onClick={closePopUp}
                                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Cencel
                                </button>
                                <button
                                    onClick={createHandle}
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