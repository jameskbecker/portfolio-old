'use client';

import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { headingVariants, subheadingVariants } from './animations';

const CoverPage = ({ heading, subheading }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start('slideIn');
      return;
    }
    controls.start('initial');
  }, [inView, controls]);

  return (
    <div className="container mx-auto flex h-screen flex-col gap-8 bg-zinc-100 px-4 dark:bg-zinc-900">
      <motion.h1
        ref={ref}
        initial="initial"
        animate={controls}
        variants={headingVariants}
        className="flex flex-1 items-end text-5xl uppercase text-zinc-900 dark:text-zinc-100 lg:text-6xl"
      >
        {heading}
      </motion.h1>

      <motion.h3
        ref={ref}
        initial="initial"
        animate={controls}
        variants={subheadingVariants}
        className="lg:4xl flex-1 text-3xl font-light text-zinc-500 dark:text-zinc-500"
      >
        {subheading}
      </motion.h3>
    </div>
  );
};

export default CoverPage;
