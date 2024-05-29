import React from 'react'
import { Label, TextInput } from "flowbite-react";
import { GiMountains } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
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
                                <Label htmlFor="city" className="mb-2 ">City</Label>
                                <TextInput
                                    type="text"
                                    id="city"
                                    placeholder="Enter your city here"
                                    className="text-lg w-full"
                                    icon={FaMapLocationDot}
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/3">
                                <Label htmlFor="date" className="mb-2">Date</Label>
                                <TextInput
                                    type="date"
                                    id="date"
                                    className=" text-lg w-full"
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/3">
                                <Label htmlFor="range" className="mb-2">Range</Label>
                                <TextInput
                                    type="range"
                                    id="range"
                                    className=" w-full"
                                />
                            </div>
                            <FaSearchLocation className='text-5xl p-2 bg-emerald-700 text-white rounded cursor-pointer'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchTrip
