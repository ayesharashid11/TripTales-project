import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTour } from '../slices/tour/tourSlice';
import mount2 from '../assets/mount2.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTour = () => {
    const [formData, setFormData] = useState({
        tourName: '',
        country: '',
        totalDays: '',
        price: '',
        city: '',
        departureAddress: '',
        seats: '',
        email: '',
        phoneNo: '',
        file: null,
    });

    const { loading, error } = useSelector((state) => state.tour || { loading: false, error: null });
    const userId = useSelector((state) => state.auth.user?._id); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            file: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        if (userId) { 
            data.append('user', userId); 
            dispatch(createTour({ tourData: data, userId })) 
                .unwrap()
                .then(() => {
                    navigate('/');
                })
                .catch(() => {
                    // Errors are handled in redux slice
                });
        } else {
            console.error("User ID is undefined");
        }
    };

    return (
        <div className="relative h-screen w-full">
            <ToastContainer />
            <img src={mount2} className="h-full w-full object-cover" alt="Background" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30">
                <header className="absolute top-0 left-0 p-5">
                    <Link to="/" className="text-white md:text-2xl font-semibold">TripTales</Link>
                </header>
                <div className="bg-indigo-900 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h1 className="text-md md:text-xl text-white font-medium">Tour Details</h1>
                    {error && <p className="text-red-600">{error}</p>}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full group">
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <div className="relative z-0 w-full group">
                                    <input
                                        type="text"
                                        name="tourName"
                                        id="tourName"
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={formData.tourName}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="tourName"
                                        className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Tour Name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full group">
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="country"
                                        className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Country
                                    </label>
                                </div>
                                <div className="relative z-0 w-full group">
                                    <input
                                        type="number"
                                        name="totalDays"
                                        id="totalDays"
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        value={formData.totalDays}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="totalDays"
                                        className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Total Days
                                    </label>
                                </div>
                                <div className="relative z-0 w-full group">
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label
                                        htmlFor="price"
                                        className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Price
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 md:gap-6">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="city"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    City
                                </label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    name="departureAddress"
                                    id="departureAddress"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.departureAddress}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="departureAddress"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Departure Address
                                </label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input
                                    type="number"
                                    name="seats"
                                    id="seats"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.seats}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="seats"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Total Seats
                                </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full group">
                            <input
                                type="file"
                                name="file"
                                id="file"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                onChange={handleFileChange}
                            />
                        </div>
                        <h1 className="text-md md:text-xl text-white font-medium">Contact Details</h1>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input
                                    type="tel"
                                    name="phoneNo"
                                    id="phoneNo"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.phoneNo}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="phoneNo"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Phone No.
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white flex bg-emerald-700 bg-opacity-70 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Create Tour
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateTour;
