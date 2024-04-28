import React from 'react';
import { Main } from '../layouts/Main';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BolgDetail = () => {
  const { state } = useLocation();
  return (
    <Main>
      <div className='font-[sans-serif]'>
        <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
          {/* <img className='w-full cover max-h-[600px]' src={state?.image} alt="" /> */}
          <h2 className='text-2xl font-extrabold text-gray-800 my-12'>
            {state?.title}
          </h2>
          <h2 className='text-xl font-bold text-gray-800 mb-12'>
            {state?.introduction}
          </h2>
          {state?.body?.map((data, i) => (
            <>
              <h6 key={i} className='text-lg font-semibold text-gray-800 mb-4 '>
                {data?.bodyTitle}
              </h6>
              {data?.data?.map((data, ig) => (
                <li key={ig} className='text-[16px] text-gray-800 mb-2 pl-8'>
                  {data}
                </li>
              ))}
            </>
          ))}
          <h2 className='text-2xl font-bold text-gray-800 my-6'>Conclusion</h2>
          <p className='text-[16px] text-gray-800 mb-2'>{state?.conclusion}</p>
          <div className='flex items-center justify-center'>
            <Link
              to={'/'}
              className=' mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full flex items-center'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default BolgDetail;
