import { BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
        <div className='absolute w-full sticky top-0 overflow-x-hidden z-20'>
            <div className="navbar bg-primary flex space-x-4 justify-center drop-shadow-md">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">AirBnB</a>
                </div>

                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            
                            <BsFillBellFill className="w-5 h-5"/>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                   
                </div>
                <div className="gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" />
                            </div>
                        </label>
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar