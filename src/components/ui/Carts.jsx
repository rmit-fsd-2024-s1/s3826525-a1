import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Carts = () => {
  const navigate = useNavigate();
  const handleDetail = (e) => {
    e.preventDefault();
    navigate('/detail');
  };
  return (
    <div className='font-[sans-serif]'>
      <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
        <h2 className='text-4xl font-extrabold text-gray-800 mb-12'>
          Feature Products
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://www.transparentpng.com/thumb/vegetable/fZslFj-vegetable-cabbage-transparent.png'
                alt='Product 1'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcbny8p-c83d7482-bb8c-4c12-b351-97c83e663886.png/v1/fill/w_900,h_900/vegetable_beets_on_a_transparent_background__by_prussiaart_dcbny8p-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY2JueThwLWM4M2Q3NDgyLWJiOGMtNGMxMi1iMzUxLTk3YzgzZTY2Mzg4Ni5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yrjSU9Q_r-TxTGwoG_lAVyxdvUVT_9OzAv70MMLvJwA'
                alt='Product 2'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://png.pngtree.com/png-clipart/20220206/original/pngtree-carrots-vegetable-with-leaves-png-for-free-download-png-image_7263912.png'
                alt='Product 3'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dc29xo8-52608c29-4cdb-423b-8904-4e7dd0380135.png/v1/fill/w_1024,h_902/vegetable_cucumber_on_a_transparent_background__by_prussiaart_dc29xo8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAyIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYzI5eG84LTUyNjA4YzI5LTRjZGItNDIzYi04OTA0LTRlN2RkMDM4MDEzNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iXrlbBD3GOpFcFr7GTBParLy01CNnGyc6ZAyjLbd1Lc'
                alt='Product 3'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png'
                alt='Product 3'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://www.freeiconspng.com/uploads/vegetable-icon-png-28.png'
                alt='Product 3'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://www.transparentpng.com/thumb/vegetable/jnFWeB-okra-vegetable-photos.png'
                alt='Product 3'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
          <div
            onClick={handleDetail}
            className='bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative'
          >
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                className='fill-gray-800 inline-block'
                viewBox='0 0 64 64'
              >
                <path
                  d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                  data-original='#000000'
                ></path>
              </svg>
            </div>
            <div className='w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
              <img
                src='https://freepngimg.com/save/145526-black-brinjal-download-hq/1317x1575'
                alt='Product 3'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                SoleStride Elegance
              </h3>
              <p className='text-gray-500 text-sm mt-1'>
                5 types of shoos available
              </p>
              <h4 className='text-lg text-gray-700 font-bold mt-1'>$10.5</h4>
              <div className='flex space-x-2 mt-3'>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#facc15]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-4 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              <button
                type='button'
                className='w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full'
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
