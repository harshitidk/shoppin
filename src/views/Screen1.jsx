import Head from '../components/Head.jsx';
import React, { useState, useEffect } from 'react';
import Gradient from '../components/Gradient.jsx';
import Search from '../components/Search.jsx';
import ImgGroup from '../components/ImgGroup.jsx';
import axios from 'axios';
import {motion} from 'framer-motion';

function Screen1() {
    const [search, set_query] = useState("Dark Academia");
    const [loading, set_loading] = useState(true);


    function search_query(value){
        set_query(value);
        console.log(value);
    }

    let query = search + " ";
    let response = { data: [] }; // Initialize response with an empty data array

    useEffect(() => {
        const fetchData = async () => {
            try {
                // query+="women outfit"
                query = search.replace(/\s+/g, '%20'); // Replace spaces with %20 for URL encoding
                response = await axios.get(`http://localhost:4000/api/search?q=${query}`);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [search]);

    return(<div className='flex relative flex-col justify-center items-center relative w-screen h-screen bg-white pb-15'>
        <div className='relative z-10 md:bottom-10 bottom-10 ml-3'><Head /></div>
        <div className='relative z-20 md:mt-0 mt-0 md:mr-10'><Search search_query={search_query} /></div>
        <div className='absolute w-screen bottom-6 md:-bottom-140 z-0 md:blur-[172.5px] blur-[80px] scale-240 md:scale-100'><Gradient /></div>
        <div className='absolute h-screen w-full top-0 left-0'><ImgGroup data={response.data} /></div>
    </div>)
}

export default Screen1;