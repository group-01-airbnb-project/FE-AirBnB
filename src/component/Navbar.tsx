import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [toggle, setToggle] = useState<boolean>(false);

  const SetToggle = () => {
    setCookie('toggle', !toggle)
    setToggle(!toggle)
  }

  const Logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout ",
    })
    .then((result) => {
      if (result.isConfirmed) {
        removeCookie("token", {});
        removeCookie("role", {});
        Swal.fire("Logout!", "Anda Telah Logout", "success");
        navigate("/");
      }
    })

}

return (
  <>
    <div className="absolute w-full h-screen top-0 overflow-x-hidden z-20">
      <div className={`navbar shadow-xl sticky top-0 ${cookies.toggle === "true" ? "bg-gray-800" : "bg-white"} z-20`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <a>Home</a>
              </Link>
              <li>
                <a>Saved</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl hover:text-white">
            AirBnB
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <a >Saved</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-3" onClick={SetToggle}>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-2xl "
            >
              <div className="indicator">
                <span>
                  {cookies.toggle === "true" ? <BsFillSunFill /> : <BsFillMoonFill />}
                </span>

              </div>
            </label>
          </div>
          {cookies?.role && ["user", "hoster"].includes(cookies.role) ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profil" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a onClick={Logout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-ghost bg-primary text-white hover:bg-black ml-5 mr-5 rounded-xl">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  </>
);
};

export default Navbar;
