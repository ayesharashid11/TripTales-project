import React from 'react'
import scene1 from '../assets/scene1.jpg';
import scene2 from '../assets/scene2.jpeg';
import scene5 from '../assets/secne5.jpeg';
import scene4 from '../assets/scene4.jpg';
import scene3 from '../assets/scene3.jpg';
import img7 from '../assets/scene7.jpg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpg';
import img6 from '../assets/img6.jpg';

const CustomersGallery = () => {
    return (
        <div className=' p-11'>
            <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold mb-4">See Our Customers Galllery</h2>
            <div className='gap-6 columns-3 p-5' >
                <img src={scene1} className='w-full mb-5 aspect-video rounded-lg' />
                <img src={scene2} className='w-full mb-5 aspect-square rounded-lg' />
                <img src={scene3} className='w-full mb-5 aspect-video rounded-lg' />
                <img src={scene4} className='w-full mb-5 aspect-square rounded-lg' />
                <img src={scene5} className='w-full mb-5 aspect-video rounded-lg' />
                <img src={img7} className='w-full mb-5 aspect-square rounded-lg' />
                <img src={img8} className=' w-full mb-5 aspect-video  rounded-lg' />
                <img src={img9} className='w-full mb-5 aspect-square rounded-lg' />
                <img src={img6} className='w-full mb-5 aspect-video rounded-lg'/>
            </div>
        </div>
    )

}

export default CustomersGallery
