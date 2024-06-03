import React from 'react'
import { Link } from "react-router-dom";
import Signin from './SignIn';

const Header = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-emerald-700">TripTales</span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Signin />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link to="/"className=" block py-2 px-3 hover:underline-offset-1 text-emerald-700 rounded md:hover:bg-transparent md:hover:text-emerald-300 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className=" block py-2 px-3 hover:underline-offset-1 text-emerald-700 rounded md:hover:bg-transparent md:hover:text-emerald-300 md:p-0">
             Blog
                </Link>
              </li>
              <li>
                <Link to="/tours" className=" block py-2 px-3 hover:underline-offset-1 text-emerald-700 rounded md:hover:bg-transparent md:hover:text-emerald-300 md:p-0">
                Tours
                </Link>
              </li>
              <li>
                <Link to="/weather" className=" block py-2 px-3 hover:underline-offset-1 text-emerald-700 rounded md:hover:bg-transparent md:hover:text-emerald-300 md:p-0">
                 Weather
                </Link>
              </li>
              <li>
                <Link to="/create-tour" className=" block py-2 px-3 hover:underline-offset-1 text-emerald-700 rounded md:hover:bg-transparent md:hover:text-emerald-300 md:p-0">
                Create Tour
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
