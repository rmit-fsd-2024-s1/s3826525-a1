import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
 const Navigate = useNavigate();

//  useEffect(() => {
//   // Check if user is already logged in, if yes, redirect to home page
//   const isLoggedIn = localStorage.getItem("formData");
//   if (isLoggedIn) {
//    Navigate("/");
//   }
//  }, [Navigate]);

 const initialValues = {
  email: "",
  password: "",
 };

 const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
 });
 const onSubmit = (values, { resetForm }) => {
  // console.log("Form data:", values);
  // Check if the user's credentials are valid
  const storedUserData = JSON.parse(localStorage.getItem("formData"));
  if (
   storedUserData &&
   storedUserData.email === values.email &&
   storedUserData.password === values.password
  ) {
   // Reset form fields
   resetForm();
   // Redirect to home page
   storedUserData.isLogedIn = true;
// Save the updated object back to localStorage
localStorage.setItem("formData", JSON.stringify(storedUserData));

   Navigate("/user-profile");
   // Show success message
   Swal.fire({
    position: "center",
    icon: "success",
    title: "You are successfully logged in",
    showConfirmButton: false,
    timer: 1000,
   });
  } else if (storedUserData && storedUserData.email !== values.email) {
   // Show error message for wrong email
   Swal.fire({
    position: "center",
    icon: "error",
    title: "Wrong email",
    showConfirmButton: false,
    timer: 1500,
   });
  } else if (storedUserData && storedUserData.password !== values.password) {
   // Show error message for wrong password
   Swal.fire({
    position: "center",
    icon: "error",
    title: "Wrong password",
    showConfirmButton: false,
    timer: 1500,
   });
  } else {
   // Show error message for invalid credentials
   Swal.fire({
    position: "center",
    icon: "error",
    title:
     "Invalid credentials. If you don't have an account? Click on create account",
    showConfirmButton: true,
    timer: null,
   });
  }
 };

 return (
  <div className="login-page w-full h-screen px-10">
   <div className="w-full h-full flex gap-4 flex-col items-center justify-center px-10">
    <h1 className="text-center text-4xl font-semibold">Customer Login</h1>
    <div className="flex gap-10 px-10 w-full">
     <div className="flex-1 flex flex-col gap-4">
      <span className="text-2xl border-b border-black pb-2">
       Registered Customers
      </span>
      <span>If you have an account, sign in with your email address</span>
      <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}
      >
       {({ errors, touched }) => (
        <Form className="flex flex-col gap-8">
         <div className="flex flex-col">
          <label className="text-base font-bold" htmlFor="email">
           Email
          </label>
          <Field
           autoComplete="off"
           className={`p-2 border ${
            errors.email && touched.email ? "border-red-500" : "border-black"
           }`}
           type="email"
           id="email"
           name="email"
           placeholder="abc@example.com"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
         </div>
         <div className="flex flex-col">
          <label className="text-base font-bold" htmlFor="password">
           Password
          </label>
          <Field
           autoComplete="off"
           className={`p-2 border ${
            errors.password && touched.password
             ? "border-red-500"
             : "border-black"
           }`}
           type="password"
           id="password"
           name="password"
           placeholder="********"
          />
          <ErrorMessage
           name="password"
           component="div"
           className="text-red-500"
          />
         </div>
         <div className="w-full">
          <button className="w-full bg-[#343643] py-2 text-white" type="submit">
           Login
          </button>
         </div>
        </Form>
       )}
      </Formik>
     </div>

     <div className="flex-1 flex flex-col gap-4">
      <span className="text-2xl border-b border-black pb-2">New Customers</span>
      <span>
       Creating an account has many benefits: check out faster, keep more than
       one address, track orders and more.
      </span>
      <div className="w-full">
       <Link
        to="/register"
        className="block w-full bg-[#343643] text-center text-white text-xl tracking-wide py-2"
        type="button"
       >
        Create account
       </Link>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Login;
