import Swipee from '../assets/swipe.png';

function Swipe() {
  return (
    <div className='flex relative flex justify-center items-center w-screen h-screen bg-white'>
    <div className='flex flex-col flex-1 justify-center items-end h-full pr-20'>
        <div className='text-[2.8rem] w-100 leading-14'>swipe to <span className='italic text-[#FF444F]'>personalize</span></div>
        <div className='text-[1.3rem] w-100 pt-4 text-gray-400'>swipe right to save favorites, left to skip, and up to add to cart, personalized fashion made simple and fun!</div>
      </div>
      <div className="flex justify-start flex-1 items-center w-full h-full"><img src={Swipee} alt="Wardrobe" className='h-90 object-contain relative left-[-100px]'  /></div>
    </div>
  );
}

export default Swipe;  