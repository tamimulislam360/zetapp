import React from 'react';
import {people} from '@/components/images'
import Image from 'next/image';
import { Typography } from '@/components/materialExport';
import styles from './People.module.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const People = () => {
    const contents = [
        '14 Lakh+ Financial Advisor across India are using ZET to increase their income.',
        'We helped customers in more than 50 cities to get their first financial product',
        'More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans'
    ]
    return (
        <div data-aos="fade-in" data-aos-duration="1000" className={`${styles.clip} my-16 scroll-m-0 bg-primary px-4 py-12 text-white `}>
            <div className={`${styles.clip} max-w-screen-xl mx-auto flex justify-between items-center gap-2 bg-[#417FDA] rounded p-1 relative h-full`}>
                <div className="hidden md:block">
                    <Image src={people} alt="" className="w-full h-full object-cover" />
                </div>
                <div className='max-w-[500px] pr-8'>
                    <Typography variant="h5" className="mb-4">
                        THE ZET EFFECT
                    </Typography>
                    <Swiper
                        modules={[A11y, Autoplay, Pagination]}
                        pagination
                        autoplay={
                            {
                                delay: 2000,
                                disableOnInteraction: false,
                                // stopOnLastSlide: false
                            }
                        }
                        loop={true}
                    >
                        {
                            contents.map((content, i) => (
                                <SwiperSlide key={i}>
                                    <Typography variant="h3">
                                        {content}
                                    </Typography>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default People;