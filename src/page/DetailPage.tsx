import Navbar from "../component/Navbar";
import api from "../axios/RestApi";
import { useEffect, useState } from "react";
import Loading from "../component/Loading";
import ErrorPage from "../component/ErorPage";
import Card from "../component/Card";

const DetailPage = () => {
  const [DateCheckin, setDateCheckin] = useState("");
  const [DateCheckout, setDateCheckout] = useState("");

  const [homestay, setHomestay] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await api.GetHomestay();
        setHomestay(response.data);
        console.log(response.data);
      } catch (error) {
        setEror(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
          {homestay?.data?.map((item: any, index: number) => (
              <Card
                key={index}
                image='https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675'
                name={item.title}
                price={`Rp.${item.price}`}
                feature={item.facilities}
                rating={item.rating}
                Host_id={item.homestay_id}
              />))}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default DetailPage;
