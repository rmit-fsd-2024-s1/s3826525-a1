// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UserEdit = () => {
    const Navigate = useNavigate();
      const existingItems = localStorage.getItem("formData");
      const cartItems = existingItems ? JSON.parse(existingItems) : [];
      console.log('cartItems: ', cartItems);
      // cartItems.push(data);
      // const updatedCartItems = JSON.stringify(cartItems);
      // localStorage.setItem("cartItems", updatedCartItems);
      // console.log("Item added to cart:", data);
  
    // Define initial form values
    const initialValues = {
      firstName: cartItems.firstName,
      lastName: cartItems.lastName,
      email: cartItems.email,
      password: cartItems.password,
    };
  
    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 characters long'),
    });
  
    // Handle form submission
    const onSubmit = (values) => {
      // Submit logic here
      // Example: Save data to backend, update state, etc.
      console.log('Form submitted with values:', values);
      localStorage.setItem("formData", JSON.stringify(values))
      // Show success message
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Profile updated successfully',
        showConfirmButton: false,
        timer: 1500,
      });
  
      // Redirect after submission
      setTimeout(() => {
        Navigate('/user-profile');
      }, 1500);
    };
  
    return (
      <div className="personalize-profile w-full h-screen flex flex-col items-center justify-center bg-gray-500">
        <div className="w-1/2 flex items-center justify-center flex-col bg-white rounded-md p-10">
          <h2 className="capitalize font-semibold text-4xl pb-4">Edit Profile</h2>
  
          {/* Formik Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-full flex flex-col gap-6">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className={`border-2 rounded border-gray-400 outline-none px-2 py-1 ${
                        errors.firstName && touched.firstName ? 'border-red-500' : ''
                      }`}
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className={`border-2 rounded border-gray-400 outline-none px-2 py-1 ${
                        errors.lastName && touched.lastName ? 'border-red-500' : ''
                      }`}
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`border-2 rounded border-gray-400 outline-none px-2 py-1 ${
                        errors.email && touched.email ? 'border-red-500' : ''
                      }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={`border-2 rounded border-gray-400 outline-none px-2 py-1 ${
                        errors.password && touched.password ? 'border-red-500' : ''
                      }`}
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white capitalize bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update Details
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };
  
  export default UserEdit;
  

// const UserEdit = () => {
//   let Navigate = useNavigate();
//   // State variables to hold form data
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   // useEffect to load form data from local storage when component mounts
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('formData'));
//     if (storedData) {
//       setFormData(storedData);
//     }
//     console.log(storedData);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save form data to local storage
//     localStorage.setItem('formData', JSON.stringify(formData));
//     setTimeout(() => {
//       Navigate('/user-profile');
//     }, 1000);
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: 'Profile update successfully',
//       showConfirmButton: false,
//       timer: 1000,
//     });
//   };

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <>
//       <div className='personalize-profile w-full h-screen flex flex-col items-center justify-center bg-gray-500'>
//         <div className='w-1/2 flex items-center justify-center flex-col bg-white rounded-md p-10'>
//           <h2 className='capitalize font-semibold text-4xl pb-4'>
//             Edit Profile
//           </h2>

//           <form onSubmit={handleSubmit} className='w-full flex flex-col gap-6'>
//             <div className='grid md:grid-cols-2 md:gap-6'>
//               <div className='flex flex-col'>
//                 <label htmlFor='firstName'>First Name</label>
//                 <input
//                   type='text'
//                   name='firstName'
//                   id='firstName'
//                   className='border-2 rounded border-gray-400 outline:none px-2 py-1'
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className='flex flex-col'>
//                 <label htmlFor='lastName'>Last Name</label>
//                 <input
//                   type='text'
//                   name='lastName'
//                   id='lastName'
//                   value={formData.lastName}
//                   className='border-2 rounded border-gray-400 outline:none px-2 py-1'
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className='grid md:grid-cols-2 md:gap-6'>
//               <div className='flex flex-col'>
//                 <label htmlFor='email'>Email</label>
//                 <input
//                   type='text'
//                   name='email'
//                   id='email'
//                   value={formData.email}
//                   className='border-2 rounded border-gray-400 outline:none px-2 py-1'
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className='flex flex-col'>
//                 <label htmlFor='password'>Password</label>
//                 <input
//                   type='text'
//                   name='password'
//                   id='password'
//                   value={formData.password}
//                   className='border-2 rounded border-gray-400 outline:none px-2 py-1'
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type='submit'
//               className='text-white capitalize bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//             >
//               update details
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserEdit;
