import { useEffect,useRef } from 'react';
import Img from './Img.jsx';

function ImgGroup({ data }) {
  
  const mdpos = [
    { left: 8, top: 10, width: 150 },
    { right: 15, top: 16, width: 150 },
    { right: 34, bottom: 12, width: 120 },
    { bottom: 0, right: 5, width: 150 },
    { left: 26, bottom: 6, width: 170 },
    { left: 32, top: 2, width: 120 },
    { left: 3, bottom: -4, width: 130 },
    { right: 40, top: 10, width: 100 },
  ];

  const mobilepos = [
    { left: 8, top: 10, width: 40 },
    { right: 13, top: 15, width: 70 },
    { right: 22, bottom: 19, width: 90 },
    { bottom: 0, right: 5, width: 80 },
    { left: 23, bottom: 6, width: 90 },
    { left: 32, top: 2, width: 50 },
    { left: 8, bottom: 25, width: 120 },
    { right: 40, top: 10, width: 35 },
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
    <div className='group'>
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
