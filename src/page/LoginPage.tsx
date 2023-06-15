import {useState} from "react";
import { Link } from "react-router-dom";
import api from '../axios/RestApi';
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Spin from '../assets/Infinity-1s-200px.svg'

const schema = Yup.object({
  email: Yup.string().required("email required"),
  password: Yup.string().required("Password required"),
});

const LoginPage: React.FC = () => {
  const [loading, setLoading] =  useState<boolean>(false)
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  
  const formik = useFormik({
    initialValues: {
      password: "",
      email: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  
  const LoginHandle = async () => {
    const { email, password } = formik.values;
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Please check your username or password again!",
      });
      return;
    }
    try {

      setLoading(true)
      const response = await api.Login(email, password);
     
      setCookie('token', response?.data?.data?.accessToken);
      setCookie('role', response?.data?.data?.user?.role);
      
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })

      navigate("/")
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Please make sure your username and password are correct!",
      });
    }finally {
      setLoading(false) 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-lg w-full mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-16">
          <div className="flex flex-row mb-16">
            <div className="basis-1/2">
              <h2 className="text-2xl font-bold text-black">Masuk</h2>
            </div>
            <div className="basis-1/2 flex justify-end pt-2">
              <Link to="/register" className="text-primary">
                Daftar
              </Link>
            </div>
          </div>
          <form>
            <div className="mb-6">
              <label htmlFor="user" className="block text-black text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="user"
                name="email"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-black text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
            </div>
            <button
              className="btn btn-ghost bg-primary text-white py-2 px-4 rounded-md w-full drop-shadow-xl hover:bg-black mt-6"
              type="button"
              onClick={LoginHandle}
            >{loading ? 
              <img src={Spin} className="h-8 w-8" alt="Loading" />  : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
