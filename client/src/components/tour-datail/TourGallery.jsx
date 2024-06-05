import React from 'react'
import scene1 from '../../assets/scene1.jpg';
import scene2 from '../../assets/scene2.jpeg';
import img7 from '../../assets/scene7.jpg';
import img6 from '../../assets/img6.jpg';
const TourGallery = () => {
    return (
        <div>
            <h2 className="text-xl md:text-2xl flex items-center justify-center text-emerald-700 font-semibold m-6">
                Tour Gallery</h2>
            <div className=' gap-6 columns-3 p-5 mb-2' >
                <img src={scene2} className='w-full mb-5 aspect-square rounded-lg' />
                <img src={img7} className='w-full mb-5 aspect-square rounded-lg' />
                <img src={scene1} className='w-full mb-5 aspect-video rounded-lg' />
                <img src={img6} className='w-full mb-5 aspect-video rounded-lg' />
            </div>
        </div>
    )
}

export default TourGallery
