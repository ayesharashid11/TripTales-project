
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mount1 from '../assets/mount1.jpg';
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  company: "",
};

const Signup = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  const [userType, setUserType] = useState('tourist');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="relative h-screen w-full">
      <img src={mount1} className="h-full w-full object-cover" alt="Background" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
        <header className="absolute top-0 left-0 p-5">
          <Link to="/" className="text-white md:text-2xl font-semibold">TripTales</Link>
        </header>
        <div className="bg-indigo-900 bg-opacity-60 p-8  rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-6">
            <label className="mr-4 text-white text-lg font-medium">
              <input
                type="radio"
                name="userType"
                value="tourist"
                checked={userType === 'tourist'}
                onChange={handleUserTypeChange}
                className="mr-2 text-xl text-emerald-700"
              />
              Tourist
            </label>
            <label className="mr-4 text-white text-lg font-medium">
              <input
                type="radio"
                name="userType"
                value="company"
                checked={userType === 'company'}
                onChange={handleUserTypeChange}
                className="mr-2 text-xl text-emerald-700"
              />
              Company
            </label>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {userType === 'tourist' && (
              <>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                      // required
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="text-red-400 text-sm">{errors.name}</p>
                    ) : null}
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-red-400 text-sm">{errors.email}</p>
                    ) : null}
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full group">
                    <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-red-400 text-sm">{errors.password}</p>
                    ) : null}
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input type="password" name="confirm_password" id="confirm_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="text-red-400 text-sm">{errors.confirm_password}</p>
                    ) : null}
                    <label htmlFor="confirm_password" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                  </div>
                </div>
              </>
            )}
            {userType === 'company' && (
              <>
                <div className="relative z-0 w-full group">
                  <div className="relative z-0 w-full group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="text-red-400 text-sm">{errors.name}</p>
                    ) : null}
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full group">
                    <input type="text" name="country" id="country" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.company && touched.company ? (
                      <p className="text-red-400 text-sm">{errors.company}</p>
                    ) : null}
                    <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                  </div>
                </div>
                <div className="relative z-0 w-full group">
                  <input type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-400 text-sm">{errors.email}</p>
                  ) : null}
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full group">
                    <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-red-400 text-sm">{errors.password}</p>
                    ) : null}
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input type="password" name="confirm_password" id="confirm_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="text-red-400 text-sm">{errors.confirm_password}</p>
                    ) : null}
                    <label htmlFor="confirm_password" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                  </div>
                </div>
              </>
            )}
            <button type="submit" className="text-white flex  bg-emerald-700 bg-opacity-70 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
