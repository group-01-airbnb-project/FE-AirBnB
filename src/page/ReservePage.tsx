import Navbar from "../component/Navbar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservePage = () => {
  const [DateCheckin, setDateCheckin] = useState<Date | null>(null);
  const [DateCheckout, setDateCheckout] = useState<Date | null>(null);

  const handleDateCheckin = (date: Date | null) => {
    setDateCheckin(date);
  };
  const handleDateCheckout = (date: Date | null) => {
    setDateCheckout(date);
  };

  return (
    <div className="w-screen h-screen top-0 overflow-x-hidden z-0">
      <Navbar />
      <div className="flex justify-center w-screen mt-16">
        <div className="w-4/5 h-fit bg-white drop-shadow-lg rounded-lg my-10">
          <div className="w-full">
            <img
              src="https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675"
              alt="image detail"
              className="w-full h-96 object-cover rounded-t-lg "
            />
          </div>
          <div className="flex">
            <div className="w-3/5 ">
              <div className="flex gap-3 ml-3 mt-3">
                <img
                  src="https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675"
                  alt="image detail"
                  className="w-36 h-20 object-cover rounded-lg "
                />
                <img
                  src="https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675"
                  alt="image detail"
                  className="w-36 h-20 object-cover rounded-lg "
                />
                <img
                  src="https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675"
                  alt="image detail"
                  className="w-36 h-20 object-cover rounded-lg"
                />
                <img
                  src="https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675"
                  alt="image detail"
                  className="w-36 h-20 object-cover rounded-lg"
                />
              </div>
              <div className="m-5 w-full ">
                <div className="flex w-full justify-between">
                  <p className="text-4xl font-bold justify-start">
                    Villa bogor baru
                  </p>
                  <div className="badge badge-secondary mr-10 ">⭐23 / 5</div>
                </div>
                <div className="mt-3">
                  <p className="mt-2 mb-2 font-medium">2 kamar + AC + Parkir</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis hic porro sed. Quae blanditiis alias sapiente
                    fuga ullam ducimus, necessitatibus sit aliquid incidunt
                    quia, a repellendus omnis fugiat earum voluptas!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-10 w-2/5">
              <div className="w-full h-fit border-2 border-primary rounded-xl flex justify-center drop-shadow-lg mb-3">
                <div>
                  <p className="mt-3">
                    <span className="text-primary font-bold text-3xl">
                      Rp199.000
                    </span>{" "}
                    / malam
                  </p>
                  <div className="mt-5">
                    <DatePicker
                      selected={DateCheckin}
                      onChange={handleDateCheckin}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Tanggal Check-in"
                      className="border border-primary rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mt-5 mb-5">
                    <DatePicker
                      selected={DateCheckout}
                      onChange={handleDateCheckout}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Tanggal Check-out"
                      className="border border-primary rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button className="btn btn-ghost bg-primary text-white mb-5 w-full">Pesan</button>
                </div>
              </div>
              <div className="px-16 py-5 border-2 border-primary rounded-xl drop-shadow-lg">
                <div>
                  <p className="">
                    Rp199.000 x 2 malam
                  </p>
                  <hr className="border border-primary my-3" />
                  <p className="">
                    Total Rp398.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservePage;
