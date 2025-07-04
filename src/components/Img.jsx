import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function useIsMd(){
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMd; // <-- add this line
}

function Img({ src, mobilePos, mdPos }) {
  let isMd = useIsMd();
  let pos = isMd ? mdPos : mobilePos;
  let { left, right, top, bottom, width } = pos;
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const initial = {
    opacity: 0,
    scale: 0.8,
    left: left !== undefined ? `${left}%` : undefined,
    right: right !== undefined ? `${right}%` : undefined,
    top: top !== undefined ? `${top}%` : undefined,
    bottom: bottom !== undefined ? `${bottom}%` : undefined,
  };

  const animate = {
    opacity: 1,
    scale: 1,
    left: left !== undefined ? `${left}%` : undefined,
    right: right !== undefined ? `${right}%` : undefined,
    top: top !== undefined ? `${top}%` : undefined,
    bottom: bottom !== undefined ? `${bottom}%` : undefined,
  };

  return (
    <motion.div
      className="absolute rounded-[12px] overflow-hidden"
      initial={initial}
      animate={animateIn ? animate : initial}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      style={{ width: `${width}px` }}
    >
      <img src={src} style={{ width: `${width}px` }} />
    </motion.div>
  );
}

export default Img;
