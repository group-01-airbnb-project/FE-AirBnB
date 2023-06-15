import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../axios/RestApi";

import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const schema = Yup.object({
  name: Yup.string().required("email required"),
  email: Yup.string().required("Password required"),
  phone: Yup.string().required("Password required"),
  address: Yup.string().required("Password required"),
});

const Profil = () => {
  const [Data, setData] = useState<any>([]);
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
        setData(response.data);
      } catch (error) {
        console.error("ini pesan error", error);
      }
    };

    fetchUsers();
  }, [cookies]);

  // console.log(Data?.data?.UserName)
  console.log(formik.values.name);

  return (
    <div className="w-3/4 h-full">
      <div className="h-screen bg-gray-100 flex justify-center">
        <div className="w-3/4">
          <div className="mt-5">
            <label htmlFor="user" className="label">
              Your Name
            </label>
            <input
              type="text"
              id="user"
              name="name"
              placeholder="Username"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
              className="input input-bordered input-warning w-full bg-gray-100"
            />
          </div>

          <div className="mt-5">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className=" input input-bordered input-warning w-full bg-gray-100"
            />
          </div>
          <div className="mt-5">
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className=" input input-bordered input-warning w-full bg-gray-100"
            />
          </div>
          <div className="mt-5">
            <label className="label">
              <span className="label-text">Your Address</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className=" input input-bordered input-warning w-full bg-gray-100"
            />
          </div>
          <div className="mt-5 font-bold flex justify-end">
            <button className="btn btn-ghost bg-primary mb-5 text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
