import React from 'react';
import { Main } from '../layouts/Main';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetail = () => {
  const location = useLocation();
  console.log('location: ', location);
  const addtoCard = () => {
    const existingItems = localStorage.getItem('cartItems');
    const cartItems = existingItems ? JSON.parse(existingItems) : [];
    cartItems.push(location?.state);
    const updatedCartItems = JSON.stringify(cartItems);
    localStorage.setItem('cartItems', updatedCartItems);
    Swal.fire({
      title: 'ADDED',
      text: 'Item Successfully added to the cart.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  };
  return (
    <Main>
      <div className='font-[sans-serif]'>
        <div className='p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto'>
          <div className='grid items-start grid-cols-1 lg:grid-cols-5 gap-12'>
            <div className='lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8'>
              <img
                src={location?.state?.image}
                alt='Product'
                className='w-4/5 rounded object-cover'
              />
              <hr className='border-white border-2 my-6' />
              <div className='flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto'>
                <img
                  src='https://freepngimg.com/thumb/vegetable/6-2-vegetable-png-thumb.png'
                  alt='Product1'
                  className='w-24 cursor-pointer'
                />
                <img
                  src='https://www.freepnglogos.com/uploads/vegetables-png/buy-high-quality-organic-vegetables-and-fruits-online-7.png'
                  alt='Product2'
                  className='w-24 cursor-pointer'
                />
                <img
                  src='https://www.freepnglogos.com/uploads/vegetables-png/fruits-vegetables-exotic-veggies-simply-organic-cart-2.png'
                  alt='Product3'
                  className='w-24 cursor-pointer'
                />
                <img
                  src='https://www.freepnglogos.com/uploads/vegetables-png/fruit-and-vegetables-basket-png-20.png'
                  alt='Product4'
                  className='w-24 cursor-pointer'
                />
              </div>
            </div>
            <div className='lg:col-span-2'>
              <h2 className='text-2xl font-extrabold text-gray-800'>
                {location?.state?.name}
              </h2>
              <div className='flex flex-wrap gap-4 mt-4'>
                <p className='text-gray-800 text-xl font-bold'>
                  ${location.state.price}
                </p>
                <p className='text-gray-400 text-xl'>
                  <strike></strike>{' '}
                  <span className='text-sm ml-1'>Tax included</span>
                </p>
              </div>
              <div className='flex space-x-2 mt-4'>
                <svg
                  className='w-5 fill-gray-800'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-5 fill-gray-800'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-5 fill-gray-800'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-5 fill-gray-800'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg
                  className='w-5 fill-[#CED5D8]'
                  viewBox='0 0 14 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
              </div>
              {/* <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800">About the Product</h3>
        <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
         <li>
          A cup of coffee is a beverage essential because of its timeless appeal
         </li>
         <li>
          Easy to prepare. It can be brewed using various methods, from drip
          machines to manual pour-overs.
         </li>
         <li>
          Available in various sizes, from a standard espresso shot to a large
          Americano, catering to different preferences.
         </li>
         <li>
          You can customize your coffee by adding cream, sugar, or flavorings to
          suit your taste preferences.
         </li>
        </ul>
       </div> */}
              <div className='mt-8 max-w-md'>
                <h3 className='text-lg font-bold text-gray-800'>Reviews(10)</h3>
                <div className='space-y-3 mt-4'>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-800 font-bold'>5.0</p>
                    <svg
                      className='w-5 fill-gray-800 ml-1'
                      viewBox='0 0 14 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                    </svg>
                    <div className='bg-gray-300 rounded w-full h-2 ml-3'>
                      <div className='w-2/3 h-full rounded bg-gray-800'></div>
                    </div>
                    <p className='text-sm text-gray-800 font-bold ml-3'>66%</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-800 font-bold'>4.0</p>
                    <svg
                      className='w-5 fill-gray-800 ml-1'
                      viewBox='0 0 14 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                    </svg>
                    <div className='bg-gray-300 rounded w-full h-2 ml-3'>
                      <div className='w-1/3 h-full rounded bg-gray-800'></div>
                    </div>
                    <p className='text-sm text-gray-800 font-bold ml-3'>33%</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-800 font-bold'>3.0</p>
                    <svg
                      className='w-5 fill-gray-800 ml-1'
                      viewBox='0 0 14 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                    </svg>
                    <div className='bg-gray-300 rounded w-full h-2 ml-3'>
                      <div className='w-1/6 h-full rounded bg-gray-800'></div>
                    </div>
                    <p className='text-sm text-gray-800 font-bold ml-3'>16%</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-800 font-bold'>2.0</p>
                    <svg
                      className='w-5 fill-gray-800 ml-1'
                      viewBox='0 0 14 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                    </svg>
                    <div className='bg-gray-300 rounded w-full h-2 ml-3'>
                      <div className='w-1/12 h-full rounded bg-gray-800'></div>
                    </div>
                    <p className='text-sm text-gray-800 font-bold ml-3'>8%</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-800 font-bold'>1.0</p>
                    <svg
                      className='w-5 fill-gray-800 ml-1'
                      viewBox='0 0 14 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                    </svg>
                    <div className='bg-gray-300 rounded w-full h-2 ml-3'>
                      <div className='w-[6%] h-full rounded bg-gray-800'></div>
                    </div>
                    <p className='text-sm text-gray-800 font-bold ml-3'>6%</p>
                  </div>
                </div>
                <div className='flex items-start mt-8'>
                  <img
                    src='https://readymadeui.com/team-2.webp'
                    className='w-12 h-12 rounded-full border-2 border-white'
                  />
                  <div className='ml-3'>
                    <h4 className='text-sm font-bold'>John Doe</h4>
                    <div className='flex space-x-1 mt-1'>
                      <svg
                        className='w-4 fill-gray-800'
                        viewBox='0 0 14 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                      </svg>
                      <svg
                        className='w-4 fill-gray-800'
                        viewBox='0 0 14 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                      </svg>
                      <svg
                        className='w-4 fill-gray-800'
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
                      <p className='text-xs !ml-2 font-semibold'>2 mins ago</p>
                    </div>
                    <p className='text-xs mt-4'>
                      The service was amazing. I never had to wait that long for
                      my food. The staff was friendly and attentive, and the
                      delivery was impressively prompt.
                    </p>
                  </div>
                </div>
                <button
                  type='button'
                  className='w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded'
                >
                  Read all reviews
                </button>
                <hr className='my-4' />
                <div className='flex flex-wrap gap-4'>
                  {/* <button
          type="button"
          className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded"
         >
          Buy now
         </button> */}
                  <button
                    type='button'
                    onClick={() => addtoCard()}
                    className='min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-bold rounded'
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ProductDetail;
