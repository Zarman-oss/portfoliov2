'use client';
import { motion, useScroll } from 'motion/react';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left'
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
