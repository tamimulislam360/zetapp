import AboutHero from '@/components/AboutHero/AboutHero';
import Evolve from '@/components/Evolve/Evolve';
import Founders from '@/components/Founders/Founders';
import GotFeatured from '@/components/GotFeatured/GotFeatured';
import Investors from '@/components/Investors/Investors';
import React from 'react';

const About = () => {
    return (
        <div>
            <AboutHero />
            <Evolve />
            <GotFeatured />
            <Investors />
            <Founders/>
        </div>
    );
};

export default About;