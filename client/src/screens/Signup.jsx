
import React, { useState } from 'react';
import mount1 from '../assets/mount1.jpg';

const Signup = () => {
  const [userType, setUserType] = useState('tourist');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="relative h-screen w-full">
      <img src={mount1} className="h-full w-full object-cover" alt="Background" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
        {/* <div className="flex justify-center p-4 m-6 bg-gray-600 rounded-xl bg-opacity-70">
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
          <label className='text-white text-lg font-medium"'>
            <input
              type="radio"
              name="userType"
              value="entrepreneur"
              checked={userType === 'entrepreneur'}
              onChange={handleUserTypeChange}
              className="mr-2 text-xl text-emerald-700"
            />
            Entrepreneur
          </label>
        </div> */}
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
          <form className="space-y-5">
            {userType === 'tourist' && (
              <>
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white eduration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    First name
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full group">
                      <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email
                      </label>
                    </div>
                    <div className="relative z-0 w-full group">
                      <input type="password" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                  </div>
              </>
            )}
            {userType === 'company' && (
              <>
                  <div className="relative z-0 w-full group">
                    <div className="relative z-0 w-full group">
                      <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full group">
                      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                    </div>
                    <div className="relative z-0 w-full group">
                      <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input type="" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full group">
                      <input type="password" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full group">
                      <input type="password" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
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
