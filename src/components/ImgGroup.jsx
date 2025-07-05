import { useEffect,useRef } from 'react';
import Img from './Img.jsx';

function ImgGroup({ data }) {
  
  const mdpos = [
    { left: 16, top: 6, width: 120, borderRadius: 14 },
    { left: 12, bottom: 8, width: 160, borderRadius: 14 },
    { left: 38, top: 9, width: 80, borderRadius: 8 },
    { left: 59, top: 6, width: 70, borderRadius: 8 },
    { left: 76, top: 8, width: 130, borderRadius: 14 },
    { left: 76, bottom: 3, width: 200, borderRadius: 14 },
    { left: 56, bottom: 11, width: 130, borderRadius: 14 },
    { left: 35, bottom: 16, width: 90, borderRadius: 8 },
  ];

  // spreading the images in mobile
const mobilepos = [
    { left: 0, top: 0, width: 110, borderRadius: 14 },
    { left: 0, bottom: 0, width: 110, borderRadius: 14 },
    { left: 0, top: 0, width: 110, borderRadius: 8 },
    { left: 0, top: 0, width: 110, borderRadius: 8 },
    { left: 0, top: 0, width: 110, borderRadius: 14 },
    { left: 0, bottom: 0, width: 110, borderRadius: 14 },
    { left: 0, bottom: 0, width: 110, borderRadius: 14 },
    { left: 0, bottom: 0, width: 110, borderRadius: 8 },
];

  const placeholderImages = [
    "https://i.pinimg.com/736x/ab/b1/54/abb1546c171e8a7515d893bff4257a3a.jpg",
    "https://i.pinimg.com/736x/6c/d6/e5/6cd6e5e72f966eb41fe92f5ec815b738.jpg",
    "https://i.pinimg.com/736x/fa/02/ff/fa02ff3987f8d50dfb6792e7b52c3689.jpg",
    "https://i.pinimg.com/736x/c5/ad/86/c5ad8653923beeeedbd249116eebbb85.jpg",
    "https://i.pinimg.com/736x/95/42/4d/95424d49c7ecb11c2ef4f3b807feeeef.jpg",
    "https://i.pinimg.com/736x/83/aa/17/83aa1734a1a1303d2b0f1153baabd259.jpg",
    "https://i.pinimg.com/736x/68/e5/fc/68e5fcd35c2be99b6915d774c2673015.jpg",
    "https://i.pinimg.com/736x/95/42/4d/95424d49c7ecb11c2ef4f3b807feeeef.jpg",
  ];

  const imagesToShow = data?.length ? data.images : placeholderImages;
  const count = Math.min(imagesToShow.length, mdpos.length);

  return (
    <div className='group h-[50vh] md:h-full flex flex-wrap w-[100%] md:w-full gap-2 gap-y-3 px-2 justify-center items-center
     relative'>
      {imagesToShow.slice(0, count).map((src, i) => (
        <Img
          key={i}
          src={src}
          mobilePos={mobilepos[i]}
          mdPos={mdpos[i]}
        />
      ))}
    </div>
  );
}

export default ImgGroup;
