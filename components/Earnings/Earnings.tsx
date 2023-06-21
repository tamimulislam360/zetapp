import React from 'react';
import styles from './Earnings.module.css'
import { googlePlay} from '@/components/images'
import SectionHeader from '../SectionHeader/SectionHeader';
import { Typography } from '@/components/materialExport';
import Image from 'next/image';
// import video from '../../public/assets/videos/Step3.mp4'


const Earnings = () => {
    return (
        <div className={`bg-[#0A2540] text-white ${styles.clip} py-44`}>
            <div className="max-w-screen-xl max-auto p-6 flex flex-col items-center gap-6">
                <SectionHeader
                    header='Start Earning in 3 Easy Steps'
                    subheader='We have create the app the make your earning easy'
                />
                <div className="flex flex-col md:flex-row md:justify-between gap-3 justify-center items-center">
                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <Typography variant='h5'>Step 3</Typography>
                        <Typography variant='h3' className="text-center md:text-left">Start earning upto ₹ 1 Lakh every month</Typography>

                        <Image src={googlePlay} alt="" />
                    </div>
                    <div className='max-w-[200px]'>
                    <video className="h-full w-full rounded-lg" controls autoPlay>
                        <source src="/Step3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earnings;