import React, {useState} from "react";
import { Link } from "react-router-dom";
import api from '../axios/RestApi';
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Spin from '../assets/Infinity-1s-200px.svg'

const schema = Yup.object({
  first_name: Yup.string().required("required"),
  last_name: Yup.string().required("required"),
  email: Yup.string().required("required"),
  password: Yup.string().required("required"),
  phone: Yup.string().required("required"),
  birth_date: Yup.string().required("required"),
  address: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  confirm_password: Yup.string().required("required"),
});

const RegisterPage: React.FC = () => {
  const [loading, setLoading] =  useState<boolean>(false)
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name:"",
      email: "",
      password: "",
      phone: "",
      birth_date: "",
      address: "",
      gender: "",
      confirm_password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  const RegisterHandle = async () => {
    const {first_name, last_name, email, password, phone, birth_date, address, gender} = formik.values;
    
    try{
      setLoading(true)
      const response = await api.Register(first_name, last_name, email, password, phone, birth_date, address, gender);
      console.log(response.data)
      Swal.fire({
        title: 'Register Berhasil',
        text: 'Silakan Login untuk memulai',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.value) {
          window.location.href = '/login'; 
        }
      })
      
      
    } catch(error){
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Please make sure your username and password are correct!",
      });
    }finally {
      setLoading(false) 
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen w-screen">
      <div className="max-w-lg w-full mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-12 py-6">
          <h2 className="text-2xl font-bold text-black text-center">
            Daftar Sekarang
          </h2>
          <p className="text-black mb-8 text-center">
            Sudah memiliki akun?{" "}
            <Link to="/login" className="text-primary">
              Masuk
            </Link>
          </p>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="first_name"
                  id="firstName"
                  placeholder="Nama Depan"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="last_name"
                  id="lastName"
                  placeholder="Nama Belakang"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Nomor Handphone"
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                value={formik.values.phone}
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <select
                  id="gender"
                  name="gender"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  required
                >
                  <option >Jenis Kelamin</option>
                  <option value="male">Laki-Laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
              <div>
                <input
                  type="date"
                  id="birthdate"
                  name="birth_date"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={formik.values.birth_date}
                  onChange={formik.handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="address"
                placeholder="Alamat"
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md resize-none"
                value={formik.values.address}
                onChange={formik.handleChange}
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirmPassword"
                  placeholder="Konfirmasi Password"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  required
                />
                
              </div>
            </div>
            
            <p className={`${formik.values.password === formik.values.confirm_password ? "hidden" : ""} text-red-600`}>password tidak sama!</p> 
            
            <button
              className="btn btn-ghost bg-primary text-white py-2 px-4 rounded-md w-full drop-shadow-xl hover:bg-black mt-6"
              type="button"
              onClick={RegisterHandle}
            >
              {loading ? 
              <img src={Spin} className="h-8 w-8" alt="Loading" />  : "Daftar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
