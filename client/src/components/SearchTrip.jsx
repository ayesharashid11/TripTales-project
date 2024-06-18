import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { GiMountains } from 'react-icons/gi';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SearchTrip = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/tours?query=${searchQuery}`);
        }
    };

    return (
        <div className='p-11'>
            <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold mb-4">
                <GiMountains className='text-4xl mr-3  text-yellow-500' />  Search your Trip
            </h2>
            <div className="flex items-center justify-center">
                <div className="p-8 rounded shadow-lg">
                    <form className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6" onSubmit={handleSearch}>
                        <div className="flex w-full">
                            <Label htmlFor="city" className="m-3 md:text-lg text-emerald-700 font-medium">Trip</Label>
                            <TextInput
                                type="text"
                                id="city"
                                placeholder="Search your trip here"
                                className="text-lg"
                                icon={FaMapLocationDot}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className='text-4xl ml-3 p-1 bg-emerald-700 text-white rounded cursor-pointer'>
                                <FaSearchLocation />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchTrip;
