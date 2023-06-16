import Navbar from '../component/Navbar'
import Card from '../component/Card'
import api from '../axios/RestApi';
import { useEffect, useState } from 'react'
import Loading from '../component/Loading';
import ErrorPage from '../component/ErorPage';

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [Eror, setEror] = useState<boolean>(false)
  const [homestay, setHomestay] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await api.GetHomestay();
        setHomestay(response.data)
      

      } catch (error) {
        setEror(true)

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
          <Loading /> :
          Eror? <ErrorPage/> : 
          <div className='flex flex-wrap justify-center mt-10 gap-3 mb-10 p-3'>
            {homestay?.data?.map((item: any, index: number) => (
              <Card
                key={index}
                place={item.location}
                image={
                  
                  item?.image_link?.map((img: any)=>(img.image_link))
                }
                // image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/334276976.jpg?k=2a599cafc32bb045a5e733e36d2a50429dcedcb573cf43d29e479ddcb419ef00&o=&hp=1"
                name={item.title}
                price={`Rp.${item.price}`}
                feature={item.facilities}
                rating={item.rating}
                Host_id={item.homestay_id}
              />))}

          </div>}
      </Navbar>

    </div>
  )
}

export default HomePage