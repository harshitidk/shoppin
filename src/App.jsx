import Hero from './views/Hero.jsx';
import Wardrobe from './views/Wardrobe.jsx';
import React, { useEffect, useRef } from 'react';
import playstore from './assets/playstore.svg';
import apple from './assets/applestore.png';
import Vibe from './views/Vibe.jsx';
import SearchImg from './views/SearchImg.jsx';
import Swipe from './views/Swipe.jsx';
import SingleCart from './views/Checkout.jsx';
import shoppin from './assets/shoppin.webp';
import Tryon from './views/Tryon.jsx';

function App(){
  return(
    <div className='flex flex-col relative text-white overflow-x-hidden snap-y snap-mandatory overflow-y-scroll h-screen w-screen'>
    <div className='h-[10vh] fixed z-30 bg-white w-full flex justify-start items-center pl-5 md:pl-10 border-b-2 border-gray-200' 
    style={{ boxShadow: '0px 4px 33.1px 0px rgba(0,0,0,0.1)' }}><img src={shoppin} alt="shoppin" className='w-30 object-contain' /></div>
    <div 
    className='flex gap-2 fixed z-30 md:right-10 md:top-0 w-full md:justify-center md:items-center h-[10vh] bottom-0 md:w-fit md:pb-0 md:h-[10vh] md:bg-transparent pb-10 bg-white justify-center items-center'>
      <div>
          <a href="https://apps.apple.com/in/app/shoppin/id6738202299" target="_blank"><AppStoreDownload /></a>
      </div>
      <div>
          <a href="https://play.google.com/store/apps/details?id=app.shoppin.ios" target="_blank"><PlayStoreDownload /></a>
      </div>
  </div>
      <div className='snap-start'><Hero /></div>
      <div className='snap-start'><Vibe /></div>
      <div className='snap-start'><Wardrobe /></div>
      <div className='snap-start'><SearchImg /></div>
      <div className='snap-start'><Swipe /></div>
      <div className='snap-start'><SingleCart /></div>
      <div className='snap-start'><Tryon /></div>
    </div>
  )
}

export default App;


export function AppStoreDownload() {
    return (
        <div className='flex justify-center items-center md:gap-0 gap-3 md:gap-3 md:mt-0 mt-10 rounded-[14px] p-2 px-4 text-white bg-black h-[55px]'>
            <img src={apple} className='w-5' />
            <div className='flex flex-col text-white'>
                <div className='flex flex-row text-[.7rem] font-medium leading-4 opacity-70'>download on the</div>
                <div className='leading-5 text-[0.9rem] font-medium'>app store</div>
            </div>
        </div>
    );
}

export function PlayStoreDownload() {
    return (
        <div className='flex justify-center items-center md:gap-2 gap-[6px] md:mt-0 mt-10 rounded-[14px] p-2 px-3 text-black bg-white border border-gray-300 h-[55px]'>
            <img src={playstore} className='w-6' />
            <div className='flex flex-col text-black'>
                <div className='flex flex-row text-[.7rem] font-medium leading-4 opacity-50'>download on the</div>
                <div className='leading-5 text-[0.9rem] font-medium'>play store</div>
            </div>
        </div>
    );
}