import React from 'react'
import { GiMountains } from "react-icons/gi";
const SearchTrip = () => {
    return (
        <>
            <div className='p-11'>
         
                <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold mb-4">
                <GiMountains className='text-4xl mr-3  text-yellow-500' />  Search your Trip</h2>
               
                <div className="flex items-center justify-center ">
                    <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
                        <form className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                            <div className="flex flex-col w-full md:w-1/3">
                                <label htmlFor="city" className="mb-2 ">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="Enter your city here"
                                    className="border border-gray-300 rounded px-4 py-2 text-lg w-full"
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/3">
                                <label htmlFor="date" className="mb-2">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="border border-gray-300 rounded px-4 py-2 text-lg w-full"
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/3">
                                <label htmlFor="range" className="mb-2">Range</label>
                                <input
                                    type="range"
                                    id="range"
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchTrip
