import Wardrobee from '../assets/wardrobe.png';

function Wardrobe() {
  return (
    <div className='flex relative flex justify-center items-center w-screen h-screen bg-white'>
      <div className="flex justify-end flex-1 items-center w-full h-full"><img src={Wardrobee} alt="Wardrobe" className='h-120 object-contain'  /></div>
      <div className='flex flex-col flex-1 justify-center items-start text-left h-full pl-20'>
        <div className='text-left text-[2.8rem] w-100 leading-14'>create <span className='italic text-[#FF444F]'>wardrobe</span> with friends</div>
        <div className='text-[1.3rem] w-90 pt-4 text-gray-400'>save faves, build collections, and co-create your dream wardrobe with your friends</div>
      </div>
    </div>
  );
}

export default Wardrobe;  