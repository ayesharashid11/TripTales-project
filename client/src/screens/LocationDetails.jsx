// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import img5 from '../assets/img5.jpg'
// const PlacesComponent = () => {
//     const [city, setCity] = useState('');
//     const [places, setPlaces] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [activeFilter, setActiveFilter] = useState('hotels');
//     const [showMore, setShowMore] = useState(false);
//     const initialDisplayLimit = 6;

//     const fetchData = async (city) => {
//         if (!city) {
//             setError(' ');
//             return;
//         }
//         try {
//             setLoading(true);
//             const response = await axios.get(`http://localhost:8080/api/city-places?city=${city}`);
//             const fetchedData = response.data;
//             if (!fetchedData.restaurants && !fetchedData.hotels && !fetchedData.pharmacies) {
//                 setError('No places found for this city.');
//                 setPlaces([]);
//             } else {
//                 const allPlaces = [
//                     ...(fetchedData.restaurants || []),
//                     ...(fetchedData.hotels || []),
//                     ...(fetchedData.pharmacies || [])
//                 ];
//                 setPlaces(allPlaces);
//                 setActiveFilter('hotels');
//                 setError(null);
//             }
//         } catch (err) {
//             console.error('Error fetching data:', err);
//             setError('Error fetching data. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSearch = () => {
//         setShowMore(false);
//         fetchData(city);
//     };

//     const handleFilter = async (type) => {
//         if (!city) {
//             setError('Please enter a city name first.');
//             return;
//         }

//         try {
//             setLoading(true);
//             const response = await axios.get(`http://localhost:8080/api/city-places?city=${city}`);
//             const fetchedData = response.data;

//             switch (type) {
//                 case 'restaurants':
//                     setPlaces(fetchedData.restaurants || []);
//                     setActiveFilter('restaurants');
//                     break;
//                 case 'hotels':
//                     setPlaces(fetchedData.hotels || []);
//                     setActiveFilter('hotels');
//                     break;
//                 case 'pharmacies':
//                     setPlaces(fetchedData.pharmacies || []);
//                     setActiveFilter('pharmacies');
//                     break;
//                 default:
//                     setPlaces([]);
//                     setActiveFilter('hotels');
//             }
//             setShowMore(false);
//             setError(null);
//         } catch (err) {
//             console.error('Error fetching data:', err);
//             setError('Error fetching data. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleShowMore = () => {
//         setShowMore(true);
//     };

//     useEffect(() => {
//         fetchData('');
//     }, []);

//     return (
//         <div className='relative  w-full'>
//             <img src={img5}  className="h-5/6 w-full object-cover" alt="Background" />
//             <div className="absolute top-10 left-0 w-full min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-30">
//                 <div className="bg-indigo-900 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
//                     <input
//                         type="text"
//                         placeholder="Enter city name"
//                         value={city}
//                         onChange={(e) => setCity(e.target.value)}
//                         className="mr-2 p-2 border shadow-md border-gray-300 rounded-md"
//                     />
//                     <button onClick={handleSearch} className="px-4 py-2 bg-emerald-700 text-white rounded-md mr-2">
//                         Search
//                     </button>
//                 </div>
//                 <div className="mb-4 mt-10">
//                     <button
//                         onClick={() => handleFilter('hotels')}
//                         className={`px-4 py-2 ${activeFilter === 'hotels' ? 'bg-yellow-500' : 'bg-gray-300'} text-white rounded-md mr-2`}
//                     >
//                         Hotels
//                     </button>
//                     <button
//                         onClick={() => handleFilter('restaurants')}
//                         className={`px-4 py-2 ${activeFilter === 'restaurants' ? 'bg-green-500' : 'bg-gray-300'} text-white rounded-md mr-2`}
//                     >
//                         Restaurants
//                     </button>
//                     <button
//                         onClick={() => handleFilter('pharmacies')}
//                         className={`px-4 py-2 ${activeFilter === 'pharmacies' ? 'bg-green-500' : 'bg-gray-300'} text-white rounded-md`}
//                     >
//                         Pharmacies
//                     </button>
//                 </div>
//                 {error && <p className='text-white'>{error}</p>}
//                 {loading ? (
//                     <p className='font-medium text-yellow-500 text-center text-xl'>Loading places...</p>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
//                         {places.slice(0, showMore ? places.length : initialDisplayLimit).map((place) => (
//                             <div key={place.id || place.tags.name} className='mb-4 p-4 bg-white text-black border-2 border-emerald-700 rounded-2xl shadow-lg'>
//                                 <h3 className='font-semibold'>{place.tags.name}</h3>
//                                 {place.tags['addr:street'] && (
//                                     <p className='text-medium'>
//                                         {place.tags['addr:street']} {place.tags['addr:housenumber']}, {place.tags['addr:city']}
//                                     </p>
//                                 )}
//                                 {place.tags['opening_hours'] && (
//                                     <p><span className="text-yellow-500 font-medium">Opening Hours: </span> {place.tags['opening_hours']}</p>
//                                 )}
//                                 {place.tags.phone && <p><span className="text-yellow-500 font-medium">Phone:</span> {place.tags.phone}</p>}
//                                 {place.tags.website && <a href={place.tags.website} className='text-blue-500'>Website</a>}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//                 {!showMore && places.length > initialDisplayLimit && (
//                     <button onClick={handleShowMore} className='block mx-auto my-4 px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800'>
//                         Show More
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PlacesComponent;

import React, { useEffect, useState } from 'react';
import img5 from '../assets/img5.jpg';

const PlacesComponent = () => {
    const [city, setCity] = useState('');
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('hotels');
    const [showMore, setShowMore] = useState(false);
    const initialDisplayLimit = 6;

  
const data = {
    berlin: {
        restaurants: [
            { id: 1, tags: { name: 'Aida', 'addr:street': 'Knesebeckstraße', 'addr:city': 'Berlin', 'opening_hours': 'Mo-Sa 11:30-21:00; Su 15:00-21:00', cuisine: 'italian;pizza', phone: '+49 30 318 06 750', website: 'https://www.aida-restaurant.de/' } },
            { id: 2, tags: { name: 'Madame Ngo', 'addr:street': 'Kantstraße', 'addr:city': 'Berlin', 'opening_hours': 'Mo-Sa 12:00-17:00,18:00-22:30; Su 12:00-17:00,18:00-22:00', cuisine: 'asian', phone: '+49 157 53604089', website: 'https://madame-ngo.de/' } },
            { id: 3, tags: { name: 'Nam Thuân', 'addr:street': 'Pestalozzistraße', 'addr:city': 'Berlin', 'opening_hours': '2:00-24:00', cuisine: 'vietnamese', phone: '+49 157 53604089', website: 'https://madame-ngo.de/' } },
            { id: 4, tags: { name: 'Paella', 'addr:street': 'Wundtstraße', 'addr:city': 'Berlin', 'opening_hours': 'Mo-Sa 15:00-01:00, Su 12:00-01:00', cuisine: 'mexican', phone: '+49 30 30207745', website: 'https://paella.eatbu.com' } },
            { id: 5, tags: { name: 'Cancún', 'addr:street': 'Kaiserdamm', 'addr:city': 'Berlin', 'opening_hours': 'Mo-Su 11:00-03:00', cuisine: 'mexican', phone: '+493030111105', website: 'https://www.cancun-restaurant.de/' } },
            { id: 11, tags: { name: 'La Cucina di Nonna Maria', cuisine: 'Italian', phone: '+49 1234567890', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30', website: 'https://madame-ngo.de/ ' } },
            { id: 12, tags: { name: 'Delhi Dhaba', cuisine: 'Indian', phone: '+49 9876543210', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30', website: 'https://madame-ngo.de/ ' } },
            { id: 13, tags: { name: 'Thai Smile', cuisine: 'Thai', phone: '+49 2345678901', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' , website: 'https://madame-ngo.de/ '} },
            { id: 14, tags: { name: 'Acropolis', cuisine: 'Mediterranean', phone: '+49 8765432109', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' , website: 'https://madame-ngo.de/ '} },
            { id: 15, tags: { name: 'Sakura', cuisine: 'Japanese', phone: '+49 3456789012', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' , website: 'https://madame-ngo.de/ '} },
            { id: 16, tags: { name: 'Bistro Chez Pierre', cuisine: 'French', phone: '+49 7654321098', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' , website: 'https://madame-ngo.de/ '} },
            { id: 17, tags: { name: 'Taco Loco', cuisine: 'Mexican', phone: '+49 5678901234', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' , website: 'https://madame-ngo.de/ '} },
            { id: 18, tags: { name: 'Seoul Kitchen', cuisine: 'Korean', phone: '+49 6789012345', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' , website: 'https://madame-ngo.de/ '} },
            { id: 19, tags: { name: 'Mykonos Taverna', cuisine: 'Greek', phone: '+49 4567890123', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30', website: 'https://madame-ngo.de/ ' } },
            { id: 20, tags: { name: 'Fusion Flavors', cuisine: 'Fusion', phone: '+49 1098765432', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' , website: 'https://madame-ngo.de/ '} },
        ],
        hotels: [
            { id: 4, tags: { name: 'Living Hotel Großer Kurfürst"', 'addr:street': 'Neue Roßstraße', 'addr:city': 'Berlin', phone: '+49 30 246000', website: 'https://www.living-hotels.com/hotel-grosser-kurfuerst-berlin/' } },
            { id: 5, tags: { name: 'artotel Berlin Mitte', 'addr:street': 'Wallstraße', 'addr:city': 'Berlin', phone: '5566778899', website: 'http://www.artotels.com/berlin-hotel-de-d-10179/germiart' } },
            { id: 6, tags: { name: 'Living Hotel Berlin-Mitte', 'addr:street': 'Neue Roßstraße', 'addr:city': 'Berlin', phone: '+49 30 24600900', website: 'https://www.living-hotels.com/hotel-berlin-mitte' } },
            { id: 7, tags: { name: 'Radisson Collection Hotel Berlin', 'addr:street': 'Karl-Liebknecht-Straße', 'addr:city': 'Berlin', phone: '+4924600900', website: 'https://www.radissonhotels.com/en-us/hotels/radisson-collection-berlin' } },
            { id: 9, tags: { name: 'Hotel Lindenhof', 'addr:street': 'Neue Roßstraße', phone: '+49 1234567890', website: 'https://madame-ngo.de/ ' } },
            { id: 10, tags: { name: 'The Charlottenburg Inn', 'addr:street': 'Karl-Liebknecht-Straße', phone: '+49 9876543210' , website: 'https://madame-ngo.de/ '} },
            { id: 11, tags: { name: 'Potsdamer Platz Apartments', 'addr:street': 'Karl-Liebknecht-Straße', phone: '+49 2345678901', website: 'https://madame-ngo.de/ ' } },
            { id: 12, tags: { name: 'East Side Hotel', 'addr:street': 'Neue Roßstraße', phone: '+49 8765432109' , website: 'https://madame-ngo.de/ '} },
            { id: 13, tags: { name: 'Michelberger Hotel', 'addr:street': 'Karl-Liebknecht-Straße', phone: '+49 3456789012', website: 'https://madame-ngo.de/ ' } },
            { id: 14, tags: { name: 'Hndenhof', 'addr:street': 'Neue Roßstraße', phone: '+49 1234567890' , website: 'https://madame-ngo.de/ '} },
            { id: 15, tags: { name: 'The Inn', 'addr:street': 'Neue Roßstraße', phone: '+49 9876543210', website: 'https://madame-ngo.de/ ' } },
            { id: 16, tags: { name: ' Apartments', 'addr:street': 'Karl-Straße', phone: '+49 2345678901', website: 'https://madame-ngo.de/ ' } },
            { id: 17, tags: { name: ' Side Hotel', 'addr:street': 'Neue Roßstraße', phone: '+49 8765432109', website: 'https://madame-ngo.de/ ' } },
            { id: 18, tags: { name: ' WestHotel', 'addr:street': 'Karl-Liebknecht', phone: '+49 3456789012', website: 'https://madame-ngo.de/ ' } },
        ],
        pharmacies: [
            { id: 8, tags: { name: 'Reichenberger Apotheke', 'addr:street': 'Reichenberger Straße', 'addr:city': 'Berlin', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30', phone: '+49 30 9713807', website: 'https://reichenbergerapotheke.de/' } },
            { id: 9, tags: { name: 'Apotheke am Kurfürstendamm', 'addr:street': 'Reichenberger Straße',  phone: '+49 1234567890', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' } },
            { id: 10, tags: { name: 'Löwen-Apotheke, Berlin',  'addr:street': 'Karl-Straße', phone: '+49 9876543210', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' } },
            { id: 11, tags: { name: 'Sonnen-Apotheke-Yio',  'addr:street': 'Karl-Liebknecht-Straße', phone: '+49 2345678901', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' } },
            { id: 12, tags: { name: 'Adler-Apotheke',  'addr:street': 'Reichenberger Straße, Berlin', phone: '+49 8765432109', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' } },
            { id: 13, tags: { name: 'Hirsch-Apotheke',  'addr:street': 'Karl-Liebknecht', phone: '+49 3456789012', 'opening_hours': 'Mo-Th 08:00-19:00, Fr 08:00-18:30, Sa 08:00-12:30' } },
        ],
    },
    london: {
        restaurants: [
            { id: 1, tags: { name: 'Currywurst Haus', 'addr:street': 'Prenzlauer Berg, Schönhauser Allee 181', 'addr:city': 'London', 'opening_hours': '11:00 AM - 10:00 PM', phone: '+49 30 278 993 55', website: 'https://currywurst-haus.de/' } },
            { id: 2, tags: { name: 'Monsieur Vuong', 'addr:street': 'Mitte, Linienstraße 160', 'addr:city': 'London', 'opening_hours': '12:00 PM - 11:00 PM', phone: '+49 30 209 497 90', website: 'https://www.monsieurvuong.com/' } },
            { id: 3, tags: { name: 'The Barn - Coffee Roasters', 'addr:street': 'Mitte, Linienstraße 160', 'addr:city': 'London', 'opening_hours': '8:00 AM - 7:00 PM', phone: '+49 30 284 70 92', website: 'https://thebarn.de/' } },
            { id: 4, tags: { name: 'Maroush', 'addr:street': 'Maroush', 'addr:city': 'London', 'opening_hours': '85:00 PM - 2:00 AM', phone: '+49 30 443 20 143', website: 'https://www.maroush.com/' } },
            { id: 5, tags: { name: 'Currywurst Haus', cuisine: 'German', phone: '+49 30 278 993 55', website: 'https://currywurst-haus.de/', 'opening_hours': 'Mon-Fri: 11:00 AM - 10:00 PM; Sat-Sun: 12:00 PM - 11:00 PM' } },
            { id: 6, tags: { name: 'Monsieur Vuong', cuisine: 'Vietnamese', phone: '+49 30 209 497 90', website: 'https://www.monsieurvuong.com/', 'opening_hours': 'Mon-Sat: 12:00 PM - 11:00 PM; Sun: Closed' } },
            { id: 7, tags: { name: 'The Barn - Coffee Roasters', cuisine: 'Coffee Shop', phone: '+49 30 284 70 92', website: 'https://thebarn.de/', 'opening_hours': 'Mon-Fri: 8:00 AM - 7:00 PM; Sat-Sun: 9:00 AM - 6:00 PM' } },
            { id: 8, tags: { name: 'Maroush', cuisine: 'Lebanese', phone: '+49 30 443 20 143', website: 'https://www.maroush.com/', 'opening_hours': 'Mon-Sat: 8:00 PM - 2:00 AM; Sun: Closed' } },
            { id: 9, tags: { name: 'Haus', 'addr:street': 'Prenzlauer Berg, Schönhauser Allee 181', 'addr:city': 'London', 'opening_hours': '11:00 AM - 10:00 PM', phone: '+49 30 278 993 55', website: 'https://currywurst-haus.de/' } },
            { id: 10, tags: { name: 'Vuong', 'addr:street': 'Mitte, Linienstraße 160', 'addr:city': 'London', 'opening_hours': '12:00 PM - 11:00 PM', phone: '+49 30 209 497 90', website: 'https://www.monsieurvuong.com/' } },
            { id: 11, tags: { name: 'Coffee Roasters', 'addr:street': 'Mitte, Linienstraße 160', 'addr:city': 'London', 'opening_hours': '8:00 AM - 7:00 PM', phone: '+49 30 284 70 92', website: 'https://thebarn.de/' } },
            { id: 12, tags: { name: 'Vuong Maroush', 'addr:street': 'Maroush', 'addr:city': 'London', 'opening_hours': '85:00 PM - 2:00 AM', phone: '+49 30 443 20 143', website: 'https://www.maroush.com/' } },
            { id: 13, tags: { name: 'Curry', cuisine: 'German', phone: '+49 30 278 993 55', website: 'https://currywurst-haus.de/', 'opening_hours': 'Mon-Fri: 11:00 AM - 10:00 PM; Sat-Sun: 12:00 PM - 11:00 PM' } },
            { id: 14, tags: { name: 'Monss', cuisine: 'Vietnamese', phone: '+49 30 209 497 90', website: 'https://www.monsieurvuong.com/', 'opening_hours': 'Mon-Sat: 12:00 PM - 11:00 PM; Sun: Closed' } },
            { id: 15, tags: { name: 'The Coffee', cuisine: 'Coffee Shop', phone: '+49 30 284 70 92', website: 'https://thebarn.de/', 'opening_hours': 'Mon-Fri: 8:00 AM - 7:00 PM; Sat-Sun: 9:00 AM - 6:00 PM' } },
            { id: 16, tags: { name: 'Maroushuynm', cuisine: 'Lebanese', phone: '+49 30 443 20 143', website: 'https://www.maroush.com/', 'opening_hours': 'Mon-Sat: 8:00 PM - 2:00 AM; Sun: Closed' } },
            { id: 17, tags: { name: 'Curry-Uo-NU_DY', cuisine: 'German', phone: '+49 30 278 993 55', website: 'https://currywurst-haus.de/', 'opening_hours': 'Mon-Fri: 11:00 AM - 10:00 PM; Sat-Sun: 12:00 PM - 11:00 PM' } },
            { id: 18, tags: { name: 'Monssinm', cuisine: 'Vietnamese', phone: '+49 30 209 497 90', website: 'https://www.monsieurvuong.com/', 'opening_hours': 'Mon-Sat: 12:00 PM - 11:00 PM; Sun: Closed' } },
            { id: 19, tags: { name: 'The Bars-SI', cuisine: 'Coffee Shop', phone: '+49 30 284 70 92', website: 'https://thebarn.de/', 'opening_hours': 'Mon-Fri: 8:00 AM - 7:00 PM; Sat-Sun: 9:00 AM - 6:00 PM' } },
            { id: 20, tags: { name: 'Maroushuynm-WEST', cuisine: 'Lebanese', phone: '+49 30 443 20 143', website: 'https://www.maroush.com/', 'opening_hours': 'Mon-Sat: 8:00 PM - 2:00 AM; Sun: Closed' } },
        ],
        hotels: [
            { id: 5, tags: { name: 'Michelberger Hotel', 'addr:street': 'Friedrichshain, Warschauer Straße 39-40', 'addr:city': 'London', website: 'https://michelberger.com/' } },
            { id: 6, tags: { name: 'Hotel Zoo', 'addr:street': 'Charlottenburg, Kurfürstendamm 25', 'addr:city': 'London', website: 'https://www.hotelamzoo.de/' } },
            { id: 7, tags: { name: 'The Mandala Hotel', 'addr:street': 'Mitte, Potsdamer Straße 3', 'addr:city': 'London', website: 'https://www.mandalahotel.com/' } },
            { id: 8, tags: { name: 'nhow', 'addr:street': 'Friedrichshain, Stralauer Platz 34', 'addr:city': 'London', website: 'https://www.nhow-hotels.com/berlin/' } },
            { id: 9, tags: { name: 'Hotel Lindenhof', 'addr:street': 'Neue Roßstraße', phone: '+49 1234567890' } },
            { id: 10, tags: { name: 'The Charlottenburg Inn', 'addr:street': 'Karl-Liebknecht-Straße', phone: '+49 9876543210' } },
            { id: 11, tags: { name: 'Potsdamer Platz Apartments', 'addr:street': 'Karl-Liebknecht-Straße', phone: '+49 2345678901' } },
            { id: 12, tags: { name: 'East Side Hotel', 'addr:street': 'Neue Roßstraße', phone: '+49 8765432109' } },
            { id: 13, tags: { name: 'Michelberger Hotel', 'addr:street': 'Karl-Liebknecht-Straße', phone: '+49 3456789012' } },
            { id: 14, tags: { name: 'Hndenhof', 'addr:street': 'Neue Roßstraße', phone: '+49 1234567890' } },
            { id: 15, tags: { name: 'The Inn', 'addr:street': 'Neue Roßstraße', phone: '+49 9876543210' } },
            { id: 16, tags: { name: ' Apartments', 'addr:street': 'Karl-Straße', phone: '+49 2345678901' } },
            { id: 17, tags: { name: ' Side Hotel', 'addr:street': 'Neue Roßstraße', phone: '+49 8765432109' } },
            { id: 18, tags: { name: ' WestHotel', 'addr:street': 'Karl-Liebknecht', phone: '+49 3456789012' } },
        ],
        pharmacies: [
            { id: 9, tags: { name: 'Apotheke am Rosenthaler Platz', 'addr:street': 'Mitte, Rosenthaler Platz 1', 'addr:city': 'London', 'opening_hours': '8:00 AM - 8:00 PM', phone: '+49 30 280 92 888', website: 'https://www.apo-rosenthalerplatz.de/' } },
        ],
    },
};

    const fetchData = async (city) => {
        if (!city) {
            setError('Please enter a city name.');
            return;
        }

        const cityData = data[city.toLowerCase()];
        if (!cityData) {
            setError('No data found for this city.');
            setPlaces([]);
        } else {
            setPlaces(cityData.hotels || []);
            setActiveFilter('hotels');
            setError(null);
        }
    };

    const handleSearch = () => {
        setShowMore(false);
        fetchData(city);
    };

    const handleFilter = (type) => {
        if (!city) {
            setError('Please enter a city name first.');
            return;
        }

        const cityData = data[city.toLowerCase()];
        if (!cityData) {
            setError('No data found for this city.');
            setPlaces([]);
        } else {
            switch (type) {
                case 'restaurants':
                    setPlaces(cityData.restaurants || []);
                    setActiveFilter('restaurants');
                    break;
                case 'hotels':
                    setPlaces(cityData.hotels || []);
                    setActiveFilter('hotels');
                    break;
                case 'pharmacies':
                    setPlaces(cityData.pharmacies || []);
                    setActiveFilter('pharmacies');
                    break;
                default:
                    setPlaces([]);
                    setActiveFilter('hotels');
            }
            setShowMore(false);
            setError(null);
        }
    };

    const handleShowMore = () => {
        setShowMore(true);
    };

    return (
        <div className='relative w-full'>
            <img src={img5} className="h-5/6 w-full object-cover" alt="Background" />
            <div className="absolute top-10 left-0 w-full min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-30">
                <div className="bg-indigo-900 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mr-2 p-2 border shadow-md border-gray-300 rounded-md"
                    />
                    <button onClick={handleSearch} className="px-4 py-2 bg-emerald-700 text-white rounded-md mr-2">
                        Search
                    </button>
                </div>
                <div className="mb-4 mt-10">
                    <button
                        onClick={() => handleFilter('hotels')}
                        className={`px-4 py-2 ${activeFilter === 'hotels' ? 'bg-yellow-500' : 'bg-gray-300'} text-white rounded-md mr-2`}
                    >
                        Hotels
                    </button>
                    <button
                        onClick={() => handleFilter('restaurants')}
                        className={`px-4 py-2 ${activeFilter === 'restaurants' ? 'bg-yellow-500' : 'bg-gray-300'} text-white rounded-md mr-2`}
                    >
                        Restaurants
                    </button>
                    <button
                        onClick={() => handleFilter('pharmacies')}
                        className={`px-4 py-2 ${activeFilter === 'pharmacies' ? 'bg-yellow-500' : 'bg-gray-300'} text-white rounded-md`}
                    >
                        Pharmacies
                    </button>
                </div>
                {error && <p className='text-white'>{error}</p>}
                {loading ? (
                    <p className='font-medium text-yellow-500 text-center text-xl'>Loading places...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
                        {places.slice(0, showMore ? places.length : initialDisplayLimit).map((place) => (
                            <div key={place.id || place.tags.name} className='mb-4 p-4 bg-indigo-900 bg-opacity-60  text-black border-2 border-emerald-700 rounded-2xl shadow-lg'>
                                <h3 className='font-semibold text-lg text-center text-white'>{place.tags.name}</h3>
                                {place.tags['addr:street'] && (
                                    <p className='text-medium text-emerald-200'><span className="text-yellow-200 font-medium">Address:  </span> 
                                        {place.tags['addr:street']} {place.tags['addr:housenumber']}, {place.tags['addr:city']}
                                    </p>
                                )}
                                {place.tags['opening_hours'] && (
                                    <p className='text-medium text-emerald-200'><span className="text-yellow-200 font-medium">Opening Hours: </span> {place.tags['opening_hours']}</p>
                                )}
                                {/* {place.tags.cuisine && <p><span className="text-yellow-500 font-medium">Cuisine: </span>{place.tags.cuisine}</p>} */}
                                {place.tags.phone && <p className='text-medium text-emerald-200'><span className="text-yellow-200 font-medium">Phone:</span> {place.tags.phone}</p>}
                                {place.tags.website && <a href={place.tags.website} className='text-yellow-400'>Website</a>}
                            </div>
                        ))}
                    </div>
                )}
                {!showMore && places.length > initialDisplayLimit && (
                    <button onClick={handleShowMore} className='block mx-auto my-4 px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800'>
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
};

export default PlacesComponent;
