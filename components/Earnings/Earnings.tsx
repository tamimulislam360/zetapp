import React from 'react';
import styles from './Earnings.module.css'
import { googlePlay} from '@/components/images'
import SectionHeader from '../SectionHeader/SectionHeader';
import { Typography } from '@/components/materialExport';
import Image from 'next/image';
// import video from '../../public/assets/videos/Step3.mp4'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Earnings = () => {
    const steps = [
        'Download the App and Sign up as a ZET agent',
        'Register your customers and Recommend financial products',
        'Start earning upto ₹ 1 Lakh every month'
    ]
    return (
        <div data-aos="fade-right" data-aos-duration="1000" className={`bg-[#0A2540] text-white ${styles.clip} py-44`}>
            <div className="max-w-screen-xl max-auto p-6 flex flex-col items-center gap-6">
                <SectionHeader
                    header='Start Earning in 3 Easy Steps'
                    subheader='We have create the app the make your earning easy'
                />
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
                    className="flex flex-col md:flex-row md:justify-between gap-3 justify-center items-center">
                    {
                        steps.map((st, i) => (
                            <SwiperSlide key={i} className="flex flex-col md:flex-row gap-3 items-center md:items-start">
                                <div className='flex flex-col gap-3 items-center md:items-start'>
                                    <Typography variant='h5'>Step {i + 1}</Typography>
                                    <Typography variant='h3' className="text-center md:text-left">{st}</Typography>

                                    <Image src={googlePlay} alt="" />
                                </div>
                                <div className='max-w-[200px]'>
                                <video className="h-full w-full rounded-lg" controls autoPlay>
                                    <source src="/Step3.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                    </video>
                                </div>                                              
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Earnings;