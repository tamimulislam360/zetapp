import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@/components/materialExport";
import Image from "next/image";

import {
  Hero as heroImg,
  googlePlay
} from "@/components/images";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="w-screen py-12">
      <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center lg:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Become a Financial Advisor and{" "}
            <strong className="font-extrabold text-primary sm:block">
              Earn Rs.1 Lakh/Month
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">No investment required</p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="https://play.google.com/store/apps/details?id=in.onecode.app"
              target="_blank"
            >
              <Image src={googlePlay} alt="google play" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block max-w-md">
          <Image src={heroImg} alt="heor img" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
