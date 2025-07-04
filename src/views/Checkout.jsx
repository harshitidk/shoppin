import Single from '../assets/single.png';

function Checkout() {
  return (
    <div className='flex relative flex-col md:flex-row justify-center items-center w-full h-[100vh] md:h-[100vh] md:flex-row-reverse'>
      <div className="flex md:justify-start justify-center flex-1 md:items-center relative top-5 md:top-0 items-end w-full h-full bottom-[2vh] md:bottom-0"><img src={Single} alt="Wardrobe" className='md:w-120 w-60 object-contain' /></div>
      <div className='flex flex-col flex-1 justify-center md:items-end items-center text-left h-full md:pr-20 relative bottom-[12vh] md:bottom-0'>
        <div className='md:text-left text-center md:text-[2.8rem] text-[1.4rem] md:w-100 w-50 md:leading-14 leading-8 text-black'>single click <span className='italic text-[#FF444F]'>checkout</span></div>
        <div className='md:text-[1.3rem] md:w-100 w-60 pt-4 text-gray-400 text-center md:text-left'>no tabs, just taps checkout from 50k+ brands in a single click effortlessly</div>
      </div>
    </div>
  );
}

export default Checkout;  
