import React from 'react'

const Profil = () => {
    return (
        <div className='w-3/4 h-full'>
            <div className='h-screen bg-gray-100 flex justify-center'>
                <div className='w-3/4'>
                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                    </div>
                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                    </div>
                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                    </div>
                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text">Your Address</span>
                        </label>
                        <input type="text" placeholder="Type here" className=" input input-bordered input-warning w-full bg-gray-100" />
                    </div>
                    <div className='mt-5 font-bold flex justify-end'>

                        <button className="btn btn-warning mb-5 text-white">Save</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profil