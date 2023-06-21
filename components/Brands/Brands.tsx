"use client"

import React from "react";
import {
  Amex,
  Aufin,
  Axis,
  Bajaj,
  BOB,
  Icici,
  IndusInd,
  StandardChartered,
  YesBank,
} from "@/components/images";
import Link from "next/link";
import Image from "next/image";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SectionHeader from "../SectionHeader/SectionHeader";

const Brands = () => {
  const brands = [
    Amex,
    Aufin,
    Axis,
    Bajaj,
    BOB,
    Icici,
    IndusInd,
    StandardChartered,
    YesBank,
    BOB
    ];

    
    return (
        <div className="max-w-screen-xl mx-auto space-y-6 my-12">
            <SectionHeader 
            header="Top Brands on ZET"
            subheader="We are trusted by best brand in the country"
            />
            <div className="px-3">
            <Swiper 
            // install Swiper modules
                modules={[A11y, Autoplay]}
                // spaceBetween={50}
                slidesPerView={2}
                speed={2000}
                autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false,
                        // stopOnLastSlide: false
                    }
                }
                loop={true}
                breakpoints={{
                    // Small screens (less than 640px)
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    // Medium screens (between 640px and 768px)
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    // Large screens (between 768px and 1024px)
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40
                    },
                    // Extra large screens (1024px and above)
                    1200: {
                      slidesPerView: 5,
                      spaceBetween: 50
                    }
                  }}
                >
                {
                    brands.map((brand, i) => (
                        <SwiperSlide key={i} className="rounded-sm border" >
                            <Link href="#" className=" px-6 py-4 max-w-40 flex justify-center items-center">
                            <Image src={brand} alt="brand" width={100} height={33}  />
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    );
};

export default Brands;
