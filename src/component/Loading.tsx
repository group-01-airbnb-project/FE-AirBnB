import Spiner from "../assets/Spinner-1s-200px.svg"

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center z-20'>
        <img className="w-30 h-30" src={Spiner} alt="" />
    </div>
  )
}

export default Loading