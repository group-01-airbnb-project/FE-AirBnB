import React from 'react';
import Gif from '../assets/Pay attention.gif'

const ErrorPage: React.FC = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div>
        <img src={Gif} alt="" className='w-96' />
        <h1 className='text-xl font-bold text-center text-gray-700 mt-4'>
          Oops! Something went wrong.
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
