import React from 'react';
import {
    InvCompany1,
    InvCompany2,
    InvCompany3,
    InvCompany4,
    Inv1,
    Inv2,
    Inv3,
    Inv4,
    Inv5,
    Inv6,
    Inv7,
    Inv8,
} from '@/components/images'
import Image from 'next/image';

const Investors = () => {
    const Investors = [
        InvCompany1,
        InvCompany2,
        InvCompany3,
        InvCompany4,
    ]

    const peopleInvestors = [
        {
            id: 1,
            name: 'Kunal Shah',
            title: 'Founder, CRED',
            image: Inv1
        },
        {
           id: 2,
            name: 'Gaurav Munjal',
            title: 'Founder, UNACADEMY',
            image: Inv2
        }, 
        {
           id: 3,
            name: 'Aakrit Vaish',
            title: 'Co-Founder, HAPTIK',
            image: Inv3
        }, 
        {
           id: 4,
            name: 'Vidit Aatrey',
            title: 'Founder, RAZORPAY',
            image: Inv4
        }, 
        {
           id: 5,
            name: 'Vidit Aatrey',
            title: 'Founder & CEO, MEESHO',
            image: Inv5
        }, 
        {
           id: 6,
            name: 'Amrish Rau',
            title: 'CEO, PINELABS',
            image: Inv6
        }, 
        {
           id: 7,
            name: 'Lalit Keshre',
            title: 'CEO, GROWW',
            image: Inv7
        }, 
        {
           id: 8,
            name: 'Gokul Rajaram',
            title: 'Product, DOORDASH',
            image: Inv8
        }, 
    ]

    return (
        <div className='px-3 md:px-0'>
            <div className="max-w-screen-xl mx-auto flex flex-col gap-4 my-6">
            <h2 className="text-2xl font-bold md:text-4xl my-6">Meet the Investors</h2>

            <div className="flex flex-wrap gap-4 justify-center my-6">
                {
                    Investors.map((invest, i) => (
                        <div key={i} className="max-w-[240px] grow">
                            <Image src={invest} alt="" />
                        </div>
                    ))
                }
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    peopleInvestors.map(({name, title, id, image}) => (
                        <div key={id} className=" min-w-max max-w-[240px] grow">
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

export default Investors;