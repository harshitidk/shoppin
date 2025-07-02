import Head from '../components/Head.jsx';
import React, { useState, useEffect } from 'react';
import Gradient from '../components/Gradient.jsx';
import Search from '../components/Search.jsx';
import ImgGroup from '../components/ImgGroup.jsx';

function Screen1() {
    return(<div className='flex flex-col justify-center items-center relative w-screen overflow-hidden h-screen bg-white pb-15'>
        <div className='relative z-10 md:bottom-10 bottom-10 ml-3'><Head /></div>
        <div className='relative z-20 md:mt-0 mt-0 md:mr-10'><Search /></div>
        <div className='absolute w-screen bottom-6 md:-bottom-140 z-0 md:blur-[172.5px] blur-[80px] scale-240 md:scale-100'><Gradient /></div>
        <div className='absolute h-screen w-full top-0 left-0'><ImgGroup /></div>
    </div>)
}

export default Screen1;