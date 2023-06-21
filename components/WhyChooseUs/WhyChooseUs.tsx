import React from 'react';
import {
    whyUsHero,
    customerSupport,
    Fin_products,
    financialProduct,
    Icon_support,
    quick_payout,
    zero_investment
} from '@/components/images'
import SectionHeader from '../SectionHeader/SectionHeader';
import Image from 'next/image';
import { Typography } from '@/components/materialExport';

const WhyChooseUs = () => {
    const whyChoose = [
        {
            id: 1,
            title: 'Zero Investment',
            description: 'Build your business without any investment',
            icon: zero_investment
        },
        {
            id: 2,
            title: 'Quick Payout',
            description: 'Direct Payout in your bank account in short time',
            icon: quick_payout
        },
        {
            id: 3,
            title: 'Limitless Earnings',
            description: 'Direct Payout in your bank account in short time',
            icon: Icon_support
        },
        {
            id: 4,
            title: 'Training & Upskilling',
            description: 'Get trained by finance and sales experts',
            icon: Fin_products
        },
        {
            id: 5,
            title: 'Customer Support',
            description: 'Access tools and content to build relationship',
            icon: customerSupport
        },
        {
            id: 6,
            title: 'Financial Products',
            description: 'Trustworthy & high-rated products & categories',
            icon: financialProduct
        },
    ]
    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-6">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <div className="max-w-md flex flex-col gap-3">
                        <SectionHeader
                            header="Why"
                            headerSpan='Choose Us'
                            headerSpanClasses='text-primary'
                            subheader='Why we are loved by our customers' />
                        <Image src={whyUsHero} alt='' className="hidden lg:block" />
                    </div>
                    <div className='grow grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {
                            whyChoose.map(why => (
                                <div key={why.id} className="flex flex-col gap-3 items-center md:items-start">
                                    <div>
                                        <Image src={why.icon} alt='' />
                                    </div>
                                    <div className="">
                                        <Typography variant="h5">{why.title}</Typography>
                                        <Typography variant="normal">{why.description}</Typography>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;