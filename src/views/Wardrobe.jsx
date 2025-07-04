import Wardrobee from '../assets/wardrobe.png';

function Wardrobe() {
  return (
    <div className='flex relative flex-col md:flex-row justify-center items-center w-full h-[100vh] md:h-[100vh] bg-[#F5F2E8]'>
      <div className="flex md:justify-end justify-center flex-1 md:items-center relative top-5 md:top-0 items-end w-full h-full bottom-[2vh] md:bottom-0"><img src={Wardrobee} alt="Wardrobe" className='md:w-120 w-60 object-contain' /></div>
      <div className='flex flex-col flex-1 justify-center md:items-start items-center text-left h-full md:pl-20 relative bottom-[12vh] md:bottom-0'>
        <div className='md:text-left text-center md:text-[2.8rem] text-[1.4rem] md:w-100 w-50 md:leading-14 leading-8 text-black'>create <span className='italic text-[#FF444F]'>wardrobe</span> with friends</div>
        <div className='md:text-[1.3rem] md:w-100 w-60 pt-4 text-gray-400 text-center md:text-left'>save faves, build collections, and co-create your dream wardrobe with your friends</div>
      </div>
    </div>
  );
}

export default Wardrobe;  