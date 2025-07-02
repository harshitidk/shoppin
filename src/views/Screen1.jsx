import Head from '../components/Head.jsx';
import React, { useState, useEffect } from 'react';
import Gradient from '../components/Gradient.jsx';

function Screen1() {
    return(<div className='flex flex-col justify-center items-center relative w-fit'>
        <div className='relative md:mb-20 z-10 '><Head /></div>
        <div className='absolute w-screen top-40 md:top-10 z-0 md:blur-[172.5px] blur-[80px] scale-160 md:scale-100'><Gradient /></div>
    </div>)
}

export default Screen1;