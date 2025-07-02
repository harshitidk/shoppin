import shoppin from '../assets/shoppin.png';
import React,{useState,useEffect} from 'react';

function Head(){
    const [active, setActive] = useState(false);    
    useEffect(() => {
    },[])
    return(<div className="flex relative items-center justify-center relative"> 
        <div className="flex justify-center w-fit items-center gap-4 mr-4 md:text-7xl text-5xl font-medium leading-none">pov <span className='text-4xl'>:</span></div>
        <div className='flex justify-center relative top-1'>
            <div className='relative w-50 md:w-80 md:text-[1.6rem] text-[1.2rem] leading-[1.2]'>you searched for dark academia on</div>
            <img src={shoppin} className=' absolute left-21 scale-60 md:left-30 top-[16px] md:top-[1.8rem] w-fit object-contain' />
        </div>
    </div>)
}

export default Head;
