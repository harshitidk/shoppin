import SearchImage from '../assets/search-img.png';
import Search from '../assets/search.png';

function SearchImg() {
  return (
    <div className='flex flex-col relative flex justify-center items-center w-full h-[100vh] md:h-[100vh] mt-[10vh] md:mt-[10dvh] gap-0 bg-white'>
    <div className='flex justify-center items-center relative md:top-[20dvh] flex-col md:flex-row bottom-[10vh]'>
      <div className="flex justify-center flex-1 items-center"><img src={SearchImage} alt="Wardrobe" className='md:h-100 h-50 object-contain'  /></div>
      <div className='flex flex-col flex-1 md:justify-center md:items-start items-center text-left md:pl-20 w-full'>
        <div className='text-center md:text-left md:text-[2.8rem] text-[1.4rem] w-80 leading-14 text-black'><span className='italic text-[#FF444F]'>search</span> what you see </div>
        <div className='md:text-[1.3rem] w-60 md:w-100 text-center md:text-left md:pt-4 text-gray-400'>got fashion inspiration lying in your gallery? upload it on shoppin' and see us do our magic</div>
      </div>
    </div>
    <div className='relative h-fit md:bottom-[-14vh] bottom-[8vh] scale-160 md:scale-100'><img src={Search} alt="Search" className='object-contain' /></div>
    </div>
  );
}

export default SearchImg;  