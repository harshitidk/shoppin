import shoppin from '../assets/shoppin.png';
import React,{useState,useEffect} from 'react';

function Head(){
    const [active, setActive] = useState(false);    
    useEffect(() => {
    },[])
    return(<div className="flex relative items-center justify-center relative text-[#383838]"> 
        <div className="flex justify-center w-fit items-center gap-4 mr-4 md:text-7xl text-4xl font-normal leading-none">pov<span className='text-4xl relative tracking-[0.0rem] top-[4px]'>:</span></div>
        <div className='flex justify-center relative top-1'>
            <div className='relative w-50 md:w-80 md:text-[1.6rem] text-[1rem] leading-[1.2]'>you search for dark academia on</div>
            <img src={shoppin} className=' absolute left-18 scale-45 md:scale-60 md:left-37 top-[7px] md:top-[1.6rem] w-fit object-contain' />
        </div>
    </div>)
}

export default Head;
