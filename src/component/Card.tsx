import { FC } from "react"
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
interface cardProps {
    key?: number,
    image: string;
    name: string;
    price?: string | number;
    feature?: string;
    rating?: string | number;
    place?: string;
    Host_id?: number;
}
const Card: FC<cardProps> = ({ image, name, price, feature, rating, Host_id, place }) => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();
    console.log(cookies.role)

    const HandleDetail = (id: any) => {
        setCookie('homestay_id', id);
        navigate("/detail")
    }

    return (
        <div >
            <div className="card w-80 bg-base-100 shadow-xl z-0">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="absolute top-0 right-0 mr-5 mt-3">
                    <div className="w-fit p-5 h-10 rounded-full bg-white bg-opacity-50 flex justify-center items-center">
                        <p className="text-black font-medium">📍 {place}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="absolute top-65 right-3 justify-end">
                        <div className="badge badge-secondary">⭐{rating} / 5</div>
                    </div>
                    <p className="font-medium"><span className="text-2xl text-primary">{price}</span> / malam</p>
                    <p>{feature}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning" onClick={() => HandleDetail(Host_id)}>Detail</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card