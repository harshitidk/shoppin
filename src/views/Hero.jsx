import Head from '../components/Head.jsx';
import React, { useEffect, useState } from 'react';
import Gradient from '../components/Gradient.jsx';
import Search from '../components/Search.jsx';
import ImgGroup from '../components/ImgGroup.jsx';
import { useInView } from 'react-intersection-observer';

function Hero() {
    const { ref: compRef, inView } = useInView({ threshold: 0 });
    const [search, set_query] = useState("Dark Academia");
    useEffect(() => {
        console.log(compRef.current);
    },[inView]);

    function search_query(value) {
        set_query(value);
    }

    // When inView is false, fade out the screen
    return (
        <div
            ref={compRef}
            className={`flex relative flex-col justify-center items-center w-screen min-h-screen bg-white pb-10 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className='flex flex-col items-center justify-center relative'>
                <div className='relative z-10 md:bottom-10 bottom-10 ml-3'><Head search={search} /></div>
                <div className='relative z-20 md:mt-0 mt-0 bottom-2'><Search search_query={search_query} /></div>
            </div>
            {/* <div className='absolute w-full bottom-6 md:-bottom-140 z-0 md:blur-[172.5px] blur-[80px] scale-240 md:scale-100'><Gradient /></div> */}
            <div className='absolute h-full w-full top-0 left-0'><ImgGroup /></div>
        </div>
    );
}

export default Hero;
