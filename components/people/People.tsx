import React from 'react';
import {people} from '@/components/images'
import Image from 'next/image';
import { Typography } from '@/components/materialExport';
import styles from './People.module.css'

const People = () => {
    return (
        <div className={`${styles.clip} my-16 scroll-m-0 bg-primary px-4 py-12 text-white `}>
            <div className={`${styles.clip} max-w-screen-xl mx-auto flex justify-between items-center gap-2 bg-[#417FDA] rounded p-1 relative h-full`}>
                <div className="hidden md:block">
                    <Image src={people} alt="" className="w-full h-full object-cover" />
                </div>
                <div className='max-w-[500px] pr-8'>
                    <Typography variant="h5" className="mb-4">
                        THE ZET EFFECT
                    </Typography>
                    <Typography variant="h3">
                    14 Lakh+ Financial Advisor across India are using ZET to increase their income.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default People;