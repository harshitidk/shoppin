import SearchImage from '../assets/search-img.png';
import Search from '../assets/search.png';

function SearchImg() {
  return (
    <div className='flex flex-col relative flex justify-end items-center w-screen min-h-screen bg-white'>
    <div className='flex justify-center items-center '>
      <div className="flex justify-center flex-1 items-center w-full h-full"><img src={SearchImage} alt="Wardrobe" className='h-100 object-contain'  /></div>
      <div className='flex flex-col flex-1 justify-center items-start text-left h-full pl-20'>
        <div className='text-left text-[2.8rem] w-80 leading-14'><span className='italic text-[#FF444F]'>search</span> what you see </div>
        <div className='text-[1.3rem] w-90 pt-4 text-gray-400'>got fashion inspiration lying in your gallery? upload it on shoppin' and see us do our magic</div>
      </div>
    </div>
    <div className='relative h-fit'><img src={Search} alt="Search" className='object-contain' /></div>
    </div>
  );
}

export default SearchImg;  