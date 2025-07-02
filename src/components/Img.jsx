import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Img({ src, left, right, top, bottom, width }) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 3000);
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
      className="absolute"
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
