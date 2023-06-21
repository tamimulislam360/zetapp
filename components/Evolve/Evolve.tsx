import React from 'react';
import {
    Growth
} from '@/components/images'
import Image from 'next/image';

const Evolve = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center md:text-4xl my-6'>How we Evolved over the years.</h2>
            <div className=''>
                <Image src={Growth} alt=" " className="" />
            </div>
        </div>
    );
};

export default Evolve;