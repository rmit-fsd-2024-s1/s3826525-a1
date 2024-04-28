import React from 'react';
import { Main } from '../layouts/Main';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckOut = () => {
    const navigate = useNavigate();

    const cartItemsData = localStorage.getItem('cartItems');
    const cartItems = JSON.parse(cartItemsData);
    console.log('cartItems: ', cartItems);

    const totalPrice = cartItems?.reduce((acc, item) => acc + item?.price, 0);
    function orderplace() {
        Swal.fire({
            title: 'Success',
            text: 'Successfully placed your order',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
        });
        navigate('/');
    }

    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string()
            .required('Card number is required')
            .matches(/^\d{16}$/, 'Card number must be exactly 16 digits'),
        expiry: Yup.date()
            .required('Expiry date is required')
            .min(new Date(2024, 3, 1), 'Expiry date must be after April 2024')
            .transform((value, originalValue) => {
                const [month, year] = originalValue.split('/');
                return new Date(`20${year}`, month - 1);
            })
            .test('is-future-date', 'Expiry date must be in the future', function (value) {
                return value > new Date();
            }),
        cvv: Yup.string()
            .required('CVV is required')
            .matches(/^\d{3}$/, 'CVV must be exactly 3 digits'),
        cardHolderName: Yup.string()
            .required('Name of card holder is required')
            .matches(/^[A-Za-z ]+$/, 'Name must contain only letters'),
    });

    return (
        <Main>
            <div className='font-[sans-serif] bg-gray-50 p-6 min-h-screen'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-3xl font-extrabold text-[#333] text-center'>Checkout</h2>
                    <div className='grid lg:grid-cols-3 gap-8 mt-12'>
                        <div className='lg:col-span-2'>
                            <h3 className='text-xl font-bold text-[#333]'>Choose your payment method</h3>
                            <div className='grid gap-4 sm:grid-cols-2 mt-6'>
                                <div className='flex items-center'>
                                    <input
                                        type='radio'
                                        className='w-5 h-5 cursor-pointer'
                                        id='card'
                                        checked
                                    />
                                    <label for='card' className='ml-4 flex gap-2 cursor-pointer'>
                                        <img src='https://readymadeui.com/images/visa.webp' className='w-12' alt='card1' />
                                        <img src='https://readymadeui.com/images/american-express.webp' className='w-12' alt='card2' />
                                        <img src='https://readymadeui.com/images/master.webp' className='w-12' alt='card3' />
                                    </label>
                                </div>
                                <div className='flex items-center'>
                                    <input
                                        type='radio'
                                        className='w-5 h-5 cursor-pointer'
                                        id='paypal'
                                    />
                                    <label for='paypal' className='ml-4 flex gap-2 cursor-pointer'>
                                        <img src='https://readymadeui.com/images/paypal.webp' className='w-20' alt='paypalCard' />
                                    </label>
                                </div>
                            </div>
                            <Formik
                                initialValues={{
                                    cardNumber: '',
                                    expiry: '',
                                    cvv: '',
                                    cardHolderName: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { resetForm }) => {
                                    // Handle form submission here
                                    console.log('Form submitted:', values);
                                    resetForm();
                                    orderplace();
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className='mt-8'>
                                        <div className='grid gap-6'>
                                            <div className='grid sm:grid-cols-3 gap-6'>
                                                <div className="">

                                                <Field
                                                    // type='number'
                                                    name='cardNumber'
                                                    placeholder='Card number'
                                                    className={`px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none ${
                                                        errors.cardNumber && touched.cardNumber ? 'border-red-500' : ''
                                                    }`}
                                                    />
                                                <ErrorMessage name='cardNumber' component='div' className='text-red-500' />
                                                    </div>
                                                <div className="">
                                                <Field
                                                    type='text'
                                                    name='expiry'
                                                    placeholder='Expiry (MM/YYYY)'
                                                    className={`px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none ${
                                                        errors.expiry && touched.expiry ? 'border-red-500' : ''
                                                    }`}
                                                    />
                                                <ErrorMessage name='expiry' component='div' className='text-red-500' />
                                                    </div>
                                                <div className="">
                                                <Field
                                                    // type='number'
                                                    name='cvv'
                                                    placeholder='CVV'
                                                    className={`px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none ${
                                                        errors.cvv && touched.cvv ? 'border-red-500' : ''
                                                    }`}
                                                />
                                                <ErrorMessage name='cvv' component='div' className='text-red-500' />
                                                </div>
                                            </div>
                                            <div className='sm:col-span-2 grid sm:grid-cols-2 gap-6'>
                                                <div className="">

                                                <Field
                                                    type='text'
                                                    name='cardHolderName'
                                                    placeholder='Name of card holder'
                                                    className={`px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none ${
                                                        errors.cardHolderName && touched.cardHolderName ? 'border-red-500' : ''
                                                    }`}
                                                    />
                                                <ErrorMessage name='cardHolderName' component='div' className='text-red-500' />
                                                    </div>
                                                    <div className="">

                                                <Field
                                                    // type='number'
                                                    name='postalCode'
                                                    placeholder='Postal code'
                                                    className='px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none'
                                                    />
                                                    </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap gap-4 mt-10 '>
                                            <button
                                                type='submit'
                                                className='px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700'
                                            >
                                                Place order
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className='lg:border-l lg:pl-8'>
                            <h3 className='text-xl font-bold text-[#333]'>Summary</h3>
                            {cartItems?.map((items,i)=>(
                                <div className="flex items-center justify-between py-2">
                                <img src={items?.image} alt="" className='w-[40px] h-[40px] cover' />
                                <p className="">{items?.price}</p>
                            </div>
                            ))}
                            <ul className='text-[#333] mt-6 space-y-4'>
                                <li className='flex flex-wrap gap-4 text-sm'>
                                    SubTotal <span className='ml-auto font-bold'>${totalPrice}</span>
                                </li>
                                <li className='flex flex-wrap gap-4 text-sm'>
                                    Shipping <span className='ml-auto font-bold'>$4.00</span>
                                </li>
                                {/* <li className='flex flex-wrap gap-4 text-sm'>
                                    Discount (20%) <span className='ml-auto font-bold'>$8.00</span>
                                </li> */}
                                <li className='flex flex-wrap gap-4 text-sm'>
                                    Tax <span className='ml-auto font-bold'>$4.00</span>
                                </li>
                                <li className='flex flex-wrap gap-4 text-base font-bold border-t pt-4'>
                                    Total <span className='ml-auto'>${totalPrice+8}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default CheckOut;

