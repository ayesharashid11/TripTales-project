import React from 'react';
import hike from '../../assets/night-hike.jpg';
import BBQ from '../../assets/BBQ.jpeg';
import camp from '../../assets/camp.jpg';
import adventure from '../../assets/skybike.jpg';
import star from '../../assets/star-gaze.jpg';
import workshop from '../../assets/workshop.jpg';

const TourHighlights = () => {
    const highlights = [
        {
            img: hike,
            title: 'Night Hiking',
            description: 'Experience the thrill of hiking under the stars, guided by expert mountaineers who ensure your safety and enrich your adventure with facts about the terrain and the cosmos.'
        },
        {
            img: BBQ,
            title: 'Trip BBQ',
            description: 'Experience the thrill of hiking under the stars, guided by expert mountaineers who ensure your safety and enrich your adventure with facts about the terrain and the cosmos.'
        },
        {
            img: camp,
            title: 'Luxury Camping',
            description: 'Stay in luxurious, well-equipped tents that provide the comfort of a hotel room in the heart of nature. Enjoy gourmet meals prepared by our chefs, featuring local and organic ingredients.'
        },
        {
            img: adventure,
            title: 'Adventure Sports',
            description: 'Engage in a variety of daytime adventure sports, including rock climbing, mountain biking, and kayaking. Our professional instructors ensure a fun and safe experience for all skill levels.'
        },
        {
            img: star,
            title: 'Stargazing Sessions',
            description: 'Set up camp in picturesque locations and enjoy guided stargazing sessions with high-powered telescopes. Learn about deep-sky objects from our knowledgeable guides.'
        },
        {
            img: workshop,
            title: 'Photography Workshops',
            description: 'Capture the beauty of the night sky and the stunning landscapes with our professional photography workshops. Perfect for both novice and experienced photographers.'
        }
    ];

    return (
        <div>
            <h2 className="text-xl md:text-2xl flex items-center justify-center text-emerald-700 font-semibold m-6">
                Tour Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {highlights.map((highlight, index) => (
                    <div key={index} className="flex flex-col items-center justify-center m-2 p-4 hover:border-emerald-700 shadow-lg rounded-lg border border-gray-400">
                        <img src={highlight.img} alt={highlight.title} className="rounded-lg w-full" />
                        <h1 className="font-medium m-1 text-center text-emerald-700">{highlight.title}</h1>
                        <p className="text-center">{highlight.description}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap'>
                <div className="mt-3 p-6">
                    <h3 className="text-xl font-bold mb-2 text-emerald-700">What’s Included:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Expert guides and instructors for all activities.</li>
                        <li>High-quality camping equipment and gear.</li>
                        <li>All meals and beverages, including gourmet dinners and breakfast under the stars.</li>
                        <li>Transfers to and from the starting point.</li>
                        <li>Safety equipment and first aid support.</li>
                    </ul>
                </div>
                <div className="mt-3 p-6">
                    <h3 className="text-xl font-bold mb-2 text-emerald-700">What to Bring:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Comfortable hiking shoes and clothing suitable for outdoor activities.</li>
                        <li>A warm jacket for the nighttime activities.</li>
                        <li>A sense of adventure and curiosity!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TourHighlights;
