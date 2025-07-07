
import tryon from '../assets/tryon.mp4'

function Tryon() {
  return (
    <div className='flex relative flex-col md:flex-row justify-center items-center w-full h-[100vh] md:h-[100vh] bg-[#F5F2E8]'>
      <div className="flex md:justify-end justify-center flex-1 md:items-center relative md:top-5 items-end w-full bottom-16 md:pr-15">
        <video className='md:h-130 h-70 rounded-[20px] md:rounded-[40px] relative shadow-[0px_8px_41.6px_0px_rgba(0,0,0,0.02)] md:top-0 top-15 ' autoPlay muted loop playsInLine preload="auto">
        <source src={tryon} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      <div className='flex flex-col flex-1 justify-center md:items-start items-center text-left  h-full md:pl-20 relative bottom-[12vh] md:bottom-0'>
        <div className='md:text-left text-center md:text-[2.8rem] text-[1.4rem] md:w-70 w-50 md:leading-14 leading-8 text-black'><span className='italic text-[#FF444F]'>try</span> before you buy</div>
        <div className='md:text-[1.3rem] md:w-100 w-60 pt-4 text-gray-400 text-center md:text-left'>not sure if that outfit works on you? skip the guesswork , try it on virtually</div>
      </div>
    </div>
  );
}

export default Tryon;