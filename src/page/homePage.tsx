import Navbar from '../component/Navbar'
import Card from '../component/Card'
import api from '../axios/RestApi';
import { useEffect, useState } from 'react'
import Loading from '../component/Loading';

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [homestay, setHomestay] = useState<any>([]);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await api.GetHomestay();
        setHomestay(response.data)
        console.log(response.data)

      } catch (error) {
        console.error("ini pesan error", error);

      } finally {
        setLoading(false)
      }
    };

    fetchUsers();

  }, []);

  return (
    <div className='w-screen h-screen top-0 overflow-x-hidden z-0'>
      <Navbar>
      {loading ? 
              <Loading/>  : 
        <div className='flex flex-wrap justify-center mt-10 gap-3 mb-10 p-3'>
          {homestay?.data?.map((item: any, index: number) => (
            <Card
              id={index}
              image='https://ik.imagekit.io/tvlk/blog/2022/05/Vila-Instagenic-di-Puncak-Rumah-Prabu-Villa-.jpeg?tr=dpr-2,w-675'
              name={item.title}
              price={`Rp.${item.price}`}
              feature={item.facilities}
              rating={item.rating}
            />))}

        </div>}
      </Navbar>

    </div>
  )
}

export default HomePage