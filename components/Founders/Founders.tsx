import React from 'react';
import {
    Lokesh,
    Manish,
    Yash,
} from '@/components/images'
import SectionHeader from '../SectionHeader/SectionHeader';
import Image from 'next/image';

const Founders = () => {
    const founders = [
        {
            id: 1,
            name: 'Manish Shara',
            title: 'Co- Founder & CEO',
            image: Manish
        },
        {
           id: 2,
            name: 'Yash Desai',
            title: 'Co- Founder',
            image: Yash
        }, 
        {
           id: 3,
            name: 'Lokesh Agarwal',
            title: 'CTO',
            image: Lokesh
        }, 
    ]
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-br from-[#E9F4FF] to-white p-12 px-4 md:px-0">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
                <SectionHeader
                    header='Meet our Founders'
                    subheader='Few words from founders desk'
                />

            
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    founders.map(({name, title, id, image}) => (
                        <div data-aos="fade-in" data-aos-duration="1000" key={id} className=" min-w-max max-w-[240px] grow">
                            <Image src={image} alt="" className="w-full h-[240px] rounded-md" />
                            <h2 className="text-xl font-bold">{name}</h2>
                            <h2 className="text-md font-bold text-gray-400">{title}</h2>
                        </div>
                    ))
                }
                </div>
                </div>
        </div>
    );
};

export default Founders;