import Navbar from "../component/Navbar";
import { useState } from "react";
import PopUpReview from "../component/PopUpReview";
// import "react-datepicker/dist/react-datepicker.css";

const TripPage = () => {
  const [DateCheckin, setDateCheckin] = useState<Date | null>(null);
  console.log(DateCheckin)
  const [DateCheckout, setDateCheckout] = useState<Date | null>(null);
  console.log(DateCheckout)

  const handleDateCheckin = (date: Date | null) => {
    setDateCheckin(date);
  };
  const handleDateCheckout = (date: Date | null) => {
    setDateCheckout(date);
  };
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopUp = () => {
    setShowPopup(!showPopup);
  };
  console.log(handleDateCheckin, handleDateCheckout)

  return (
    <>
      {/* <div className="w-screen h-screen top-0 overflow-x-hidden z-0"> */}
      <div className="w-4/5 h-fit top-0 overflow-x-hidden z-0">
        <Navbar />
        <div className="flex justify-center w-full mt-16">
          <div className="w-4/5 h-fit bg-white drop-shadow-lg rounded-lg my-10 px-16 py-5 border-2 border-primary">
            <p className="mt-3 font-bold text-3xl">Trip</p>
            <hr className="border border-primary my-8" />

            <div className="flex flex-row mb-5">
              <div className="basis-1/2 pr-8">
                <p className="mb-3">Villa Master Lorem</p>
                <div className="flex flex-row w-fit gap-5 mb-3">
                 
                </div>
                <p className="mb-3">Rp199.000 x 2 malam</p>
                <p className="mb-3 font-bold">Total Rp398.000</p>
              </div>
              <div className="basis-1/2 pl-8">
                <button
                  className="btn btn-ghost bg-primary text-white"
                  onClick={HandlePopUp}
                >
                  Tulis Review
                </button>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="basis-1/2 pr-8">
                <hr className="border border-primary my-8" />
              </div>
              <div className="basis-1/2 pl-8">
                <hr className="border border-primary my-8" />
              </div>
            </div>

            <div className="flex flex-row mb-5">
              <div className="basis-1/2 pr-8">
                <p className="mb-3">Villa Master Lorem</p>
                <div className="flex flex-row w-fit gap-5 mb-3">
                 
                </div>
                <p className="mb-3">Rp199.000 x 2 malam</p>
                <p className="mb-3 font-bold">Total Rp398.000</p>
              </div>
              <div className="basis-1/2 pl-8 items-end">
                <button
                  className="btn btn-ghost bg-primary text-white"
                  onClick={HandlePopUp}
                >
                  Tulis Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <PopUpReview setShowPopup={setShowPopup} />}
    </>
  );
};

export default TripPage;
