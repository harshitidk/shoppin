import SearchImage from '../assets/search-img.png';
import Search from '../assets/search.png';

function SearchImg() {
  return (
    <div className='flex relative flex-col md:flex-row justify-center items-center w-full h-[100vh] md:h-[100vh] md:flex-row-reverse pb-[8vh] md:pb-0 gap-10 md:gap-0'>
      <div className="flex md:justify-start z-10 justify-center flex-1 md:items-center relative top-5 md:top-0 items-end w-full h-full bottom-[2vh] md:bottom-0"><img src={SearchImage} alt="Wardrobe" className='md:w-90 w-50 object-contain' /></div>
      <div className='flex flex-col flex-1 justify-center md:items-end items-center text-left h-full md:pr-20 relative bottom-[12vh] md:bottom-0'>
        <div className='md:text-left text-center md:text-[2.8rem] text-[1.4rem] md:w-93 w-50 md:leading-14 leading-6 text-black'>search what you <span className='italic text-[#FF444F]'>see</span></div>
        <div className='md:text-[1.3rem] md:w-93 w-60 pt-4 text-gray-400 text-center md:text-left'>got fashion inspiration lying in your gallery? upload it on shoppin' and see us do our magic</div>
      </div>
      <div className="absolute bottom-0 z-0 opacity-70"><img src={Search} alt="Wardrobe" className='md:w-100 w-60 scale-300 relative bottom-[20vh] md:bottom-[-5vh] md:scale-420 object-contain' /></div>
    </div>
  );
}

export default SearchImg;  
