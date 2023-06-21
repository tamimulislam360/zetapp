

const AboutHero = () => {
    return (
      <div className={`relative `}>
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            OUR <span className="text-primary">MISSION</span>
            </h2>
            <p data-aos="fade-right" data-aos-duration="1000" className="mb-6 text-base md:text-lg">
            Enabling financial inclusion for the next billion Indians
            & making their Zindagi Set. Building a platform that enables you to sell
            financial products & earn up to Rs. 1 lakh every month.
            </p>
            <p data-aos="fade-left" data-aos-duration="1000" className="max-w-md mb-10 text-xl font-bold tracking-wide  sm:text-sm sm:mx-auto md:mb-16">
            EARN BETTER. LIVE BETTER.
            </p>
           
          </div>
        </div>
      </div>
    );
};
  
export default AboutHero