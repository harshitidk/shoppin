import shoppin from '../assets/shoppin.png';
import React,{useState,useEffect} from 'react';

function Head({search}){
    const [active, setActive] = useState(false);   
    const [search_query, setSearchQuery] = useState("dark academia");
    useEffect(() => {
        setSearchQuery(search);
    },[search])
    return(<div className="flex relative items-center justify-center relative text-[#383838] font-normal"> 
        <div className="flex justify-center w-fit items-center gap-4 mr-4 md:text-7xl text-4xl font-normal leading-none">pov<span className='text-4xl relative tracking-[0.0rem] top-[4px]'>:</span></div>
        <div className='flex justify-center relative top-1'>
            <div className='relative w-50 md:w-80 md:text-[1.6rem] text-[1rem] leading-[1.2]'>you search for <span className='text-[#FF444F] w-[10px] text-overflow-ellipsis italic font-medium'>{search_query}</span> on shoppin🍓</div>
        </div>
    </div>)
}

export default Head;
