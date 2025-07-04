import Vibee from '../assets/vibe.png';

function Vibe() {
  return (
    <div className='flex relative flex-col md:flex-row justify-center items-center w-full h-[100vh] md:h-[100vh] md:flex-row-reverse'>
      <div className="flex md:justify-start justify-center flex-1 md:items-center relative top-5 md:top-0 items-end w-full h-full bottom-[2vh] md:bottom-0"><img src={Vibee} alt="Wardrobe" className='md:w-120 w-60 object-contain' /></div>
      <div className='flex flex-col flex-1 justify-center md:items-end items-center text-left h-full md:pr-20 relative bottom-[12vh] md:bottom-0'>
        <div className='md:text-left text-center md:text-[2.8rem] text-[1.4rem] md:w-100 w-50 md:leading-14 leading-8 text-black'>search your <span className='italic text-[#FF444F]'>vibe</span></div>
        <div className='md:text-[1.3rem] md:w-100 w-60 pt-4 text-gray-400 text-center md:text-left'>think of a vibe you're into, say - matcha date - and find the most accurate matches! search, discover, buy, and serve</div>
      </div>
    </div>
  );
}

export default Vibe;  
