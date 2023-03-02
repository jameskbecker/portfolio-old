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
    } else {
      controls.start('initial');
    }
  }, [inView, controls]);

  return (
    <div className="container mx-auto flex h-screen flex-col gap-8 bg-gray-100 px-4 dark:bg-gray-900">
      <div className="flex flex-1 items-end">
        <motion.h1
          ref={ref}
          initial="initial"
          animate={controls}
          variants={headingVariants}
          className="text-5xl uppercase text-slate-900 dark:text-slate-100 lg:text-6xl"
        >
          {heading}
        </motion.h1>
      </div>
      <div className="flex-1">
        <motion.h3
          ref={ref}
          initial="initial"
          animate={controls}
          variants={subheadingVariants}
          className="lg:4xl text-3xl font-light text-slate-500 dark:text-slate-500"
        >
          {subheading}
        </motion.h3>
      </div>
    </div>
  );
};

export default CoverPage;
