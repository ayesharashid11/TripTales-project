import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mount1 from '../assets/mount1.jpg';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  country: '',
  role: 'tourist', 
};

const Signup = () => {
  const navigate = useNavigate();  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userType, setUserType] = useState('tourist'); 
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      setErrorMessage(null);
      const filteredValues = userType === 'tourist'
      ? {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        role: 'tourist'
      }
      : {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        companyName: values.companyName,
        country: values.country,
        role: 'company',
      };
          
      console.log('Filtered form values:', filteredValues); 
      try {
        const res = await fetch('http://localhost:8080/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(filteredValues),
        });
        const data = await res.json();
        // const res = await axios.post('http://localhost:8080/api/auth/signup', filteredValues);
       console.log('API response data:', data);
        if (data.success === false) {
          setErrorMessage(data.message);
        } else if (res.ok) {
          navigate('/');
        }
  console.log('userType:', userType);

      } catch (error) {
        console.error('Error during form submission:', error);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
        action.resetForm();
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

  const handleUserTypeChange = (event) => {
    const value = event.target.value;
    setUserType(value);
    setFieldValue('role', value);
  };

  return (
    <div className="relative h-screen w-full">
      <img src={mount1} className="h-full w-full object-cover" alt="Background" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
        <header className="absolute top-0 left-0 p-5">
          <Link to="/" className="text-white md:text-2xl font-semibold">TripTales</Link>
        </header>
        <div className="bg-indigo-900 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
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
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                ) : null}
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                ) : null}
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-400 text-sm">{errors.password}</p>
                ) : null}
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
                ) : null}
                <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Confirm Password
                </label>
              </div>
            </div>
            {userType === 'company' && (
              <>
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.country && touched.country ? (
                    <p className="text-red-400 text-sm">{errors.country}</p>
                  ) : null}
                  <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Country
                  </label>
                </div>
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.companyName && touched.companyName ? (
                    <p className="text-red-400 text-sm">{errors.companyName}</p>
                  ) : null}
                  <label htmlFor="companyName" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Company
                  </label>
                </div>
              </>
            )}
            <button
              type="submit"
             className="text-white flex underline float-right"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
