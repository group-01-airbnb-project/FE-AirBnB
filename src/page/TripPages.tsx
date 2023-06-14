import Navbar from "../component/Navbar";
import { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";

const TripPage = () => {
  const [DateCheckin, setDateCheckin] = useState<Date | null>(null);
  const [DateCheckout, setDateCheckout] = useState<Date | null>(null);

  const handleDateCheckin = (date: Date | null) => {
    setDateCheckin(date);
  };
  const handleDateCheckout = (date: Date | null) => {
    setDateCheckout(date);
  };

  return (
    <div className="w-4/5 h-fit top-0 overflow-x-hidden z-0">
      <Navbar />
      <div className="flex justify-center w-full mt-16">
        <div className="w-4/5 h-fit bg-white drop-shadow-lg rounded-lg my-10 px-16 py-5 border-2 border-primary">
          <p className="mt-3 font-bold text-3xl">Trip</p>
          <hr className="border border-primary my-8" />
          <p className="mb-3">Villa Master Lorem</p>
          <div className="flex flex-row w-fit gap-5 mb-3">
            {/* <DatePicker
              selected={DateCheckin}
              onChange={handleDateCheckin}
              dateFormat="dd/MM/yyyy"
              placeholderText="Tanggal Check-in"
              className="border border-primary rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <DatePicker
              selected={DateCheckout}
              onChange={handleDateCheckout}
              dateFormat="dd/MM/yyyy"
              placeholderText="Tanggal Check-out"
              className="border border-primary rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            /> */}
          </div>
          <p className="mb-3">Rp199.000 x 2 malam</p>
          <p className="mb-3 font-bold">Total Rp398.000</p>
          <hr className="border border-primary my-8" />
          <p className="mb-3">Villa Master Lorem</p>
          <div className="flex flex-row w-fit gap-5 mb-3">
            {/* <DatePicker
              selected={DateCheckin}
              onChange={handleDateCheckin}
              dateFormat="dd/MM/yyyy"
              placeholderText="Tanggal Check-in"
              className="border border-primary rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <DatePicker
              selected={DateCheckout}
              onChange={handleDateCheckout}
              dateFormat="dd/MM/yyyy"
              placeholderText="Tanggal Check-out"
              className="border border-primary rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            /> */}
          </div>
          <p className="mb-3">Rp199.000 x 2 malam</p>
          <p className="mb-3 font-bold">Total Rp398.000</p>
        </div>
      </div>
    </div>
  );
};

export default TripPage;
