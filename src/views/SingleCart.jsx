import single from '../assets/single.png';

function SingleCart() {
  return (
    <div className='flex relative flex justify-center items-center w-screen h-screen bg-white'>
      <div className="flex justify-end flex-1 items-center w-full h-full"><img src={single} alt="Wardrobe" className='h-120 object-contain'  /></div>
      <div className='flex flex-col flex-1 justify-center items-start text-left h-full pl-20'>
        <div className='text-left text-[2.8rem] w-100 leading-14'>single cart <span className='italic text-[#FF444F]'>checkout</span></div>
        <div className='text-[1.3rem] w-90 pt-4 text-gray-400'>no tabs, just taps checkout from 50k+ brands in a single click effortlessly.</div>
      </div>
    </div>
  );
}

export default SingleCart;  