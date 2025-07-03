import Wardrobe from '../assets/Vibe.png';

function Screen2() {
  return (
    <div className='flex relative flex justify-center items-center w-screen h-screen bg-white'>
    <div className='flex flex-col flex-1 justify-center items-end h-full pr-20'>
        <div className='text-[2.8rem] w-100 leading-14'>search your <span className='italic text-[#FF444F]'>vibe</span></div>
        <div className='text-[1.3rem] w-100 pt-4 text-gray-400'>think of a vibe you're into, say - summer in europe - and find the most accurate matches! search, discover, buy, and serve</div>
      </div>
      <div className="flex justify-start flex-1 items-center w-full h-full"><img src={Wardrobe} alt="Wardrobe" className='h-120 object-contain'  /></div>
    </div>
  );
}

export default Screen2;  