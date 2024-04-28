import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Signin = () => {
 const Navigate = useNavigate();

 const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isLogedIn: true,
 };
 const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
   .required("Required")
   .min(8)
   .required("Password must contain at least 8 characters")
   .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
    "password must have one uppercase letter, one lowercase letter, one number, and one special character"
   ),
 });

 const onSubmit = (values, { resetForm }) => {
  let date = new Date().getDate().toString();
  let month = (new Date().getMonth() + 1).toString();
  let year = new Date().getFullYear().toString();

  const todayDate = [date, month, year].join(" / ");

  // console.log("Form data:", values);
  localStorage.setItem("formData", JSON.stringify(values));
  localStorage.setItem("formDate", JSON.stringify(todayDate));

  // Reset form fields
  resetForm();
  setTimeout(() => {
   Navigate("/");
  }, 1000);

  Swal.fire({
   position: "center",
   icon: "success",
   title: "You are successfully registered",
   showConfirmButton: false,
   timer: 1000,
  });
 };
 return (
  <>
   <div className="signin-page w-full h-screen">
    <div className="w-full h-full flex gap-4 flex-col justify-center items-center">
     <h1 className="text-center text-4xl font-semibold">Create Account </h1>

     <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
     >
      {({ errors, touched }) => (
       <Form className="flex flex-col gap-8 w-1/3">
        <div className="flex flex-col gap-1">
         <label className="text-base font-bold" htmlFor="firstName">
          First Name
         </label>
         <Field
          autoComplete="off"
          className={`p-2 border ${
           errors.firstName && touched.firstName
            ? "border-red-500"
            : "border-black"
          }`}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="test"
         />
         <ErrorMessage
          name="firstName"
          component="div"
          className="text-red-500"
         />
        </div>

        <div className="flex flex-col gap-1">
         <label className="text-base font-bold" htmlFor="lastName">
          Last Name
         </label>
         <Field
          autoComplete="off"
          className={`p-2 border ${
           errors.lastName && touched.lastName
            ? "border-red-500"
            : "border-black"
          }`}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="one"
         />
         <ErrorMessage
          name="lastName"
          component="div"
          className="text-red-500"
         />
        </div>

        <div className="flex flex-col gap-1">
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

        <div className="flex flex-col gap-1">
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
        <div className="flex items-center gap-2 justify-end mt-[-30px]">
         <span className="text-sm text-gray-500">
          Already have an account ?
         </span>
         <Link
          to="/login"
          className="text-sm text-blue-500 hover:text-blue-800 font-bold hover:underline"
         >
          Login here
         </Link>
        </div>
        <div className="w-full">
         <button className="w-full bg-[#343643] py-2 text-white" type="submit">
          Register
         </button>
        </div>
       </Form>
      )}
     </Formik>
    </div>
   </div>
  </>
 );
};

export default Signin;
