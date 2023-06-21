import React from "react";
import {
  EconomicTimes,
  Inc42,
  mint,
  YourStory,
  BusinessStandard,
} from "@/components/images";
import Image from "next/image";

const GotFeatured = () => {
  const featured = [EconomicTimes, Inc42, mint, YourStory, BusinessStandard];
  return (
    <div className="bg-[#FAFBFE] p-6 ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold md:text-4xl my-6">Got Featured</h2>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          {featured.map((f, i) => (
            <div key={i} className="max-w-[190px]">
              <Image src={f} alt="" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GotFeatured;
