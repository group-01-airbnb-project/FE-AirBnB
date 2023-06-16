import Navbar from "../component/Navbar";
import { useState, useEffect } from "react";
import api from '../axios/RestApi';
import { useCookies } from "react-cookie";

const DetailPage = () => {
  const [cookies] = useCookies();
  const [DateCheckin, setDateCheckin] = useState("");
  const [DateCheckout, setDateCheckout] = useState("");
  const [Data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {

        const response = await api.GetHomestaybyId(cookies.homestay_id);
        setData(response.data)


      } catch (error) {
        console.log(error)

      }
      //  finally {
      //   setLoading(false)
      // }
    };

    fetchUsers();

  }, []);
  console.log(Data)

  const handleDateCheckin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateCheckin(e.target.value);
  };
  const handleDateCheckout = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateCheckout(e.target.value);
  };
  return (
    <div className="w-screen h-screen top-0 overflow-x-hidden z-0">
      <Navbar>
        <div className="flex justify-center w-screen mt-3">
          <div className="w-4/5 h-fit bg-white drop-shadow-lg rounded-lg mb-10">
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
                      {Data?.data?.title}
                    </p>
                    <div className="badge badge-secondary mr-10 ">⭐{Data?.data?.rating} / 5</div>
                  </div>
                  <div className="mt-3">
                    <p className="mt-2 mb-2 font-medium">
                      {Data?.data?.facilities}
                    </p>
                    <p>
                      {Data?.data?.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-10 w-2/5">
                <div className="w-full h-fit border-2 border-primary rounded-xl flex justify-center drop-shadow-lg">
                  <div>
                    <p className="mt-3">
                      <span className="text-primary font-bold text-3xl">
                        Rp. {Data?.data?.price}
                      </span>{" "}
                      / malam
                    </p>
                    <div className="mt-5">
                      <label className="label">
                        <span className="label-text">Tanggal Check-in</span>
                      </label>
                      <input
                        type="date"
                        id="Check - In"
                        className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                        value={DateCheckin}
                        onChange={handleDateCheckin}
                        required
                      />
                    </div>
                    <div className="mt-2 mb-5">
                      <label className="label">
                        <span className="label-text">Tanggal Check-out</span>
                      </label>
                      <input
                        type="date"
                        id="Check - out"
                        className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                        value={DateCheckout}
                        onChange={handleDateCheckout}
                        required
                      />
                    </div>
                    <button className="btn btn-ghost bg-primary text-white mb-5 w-full">
                      Cek Ketersediaan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-8 mx-5">
              <hr className="border border-primary my-5" />
              <h1 className="mt-3 font-bold text-3xl mb-3">Reviews</h1>

              <div className="flex flex-col">
                {Data?.data?.reviews.map((item: any) => (

                  <div>
                    <div className="flex flex-row mt-5">
                      <div className="w-7 rounded-full mr-3">
                        <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" />
                      </div>
                      <span>{item.customer_id}</span>
                    </div>
                    <span className="mt-2">⭐{item.ratings}</span><br/>
                    <span className="mt-2">
                      {item.reviews}
                    </span>
                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default DetailPage;
