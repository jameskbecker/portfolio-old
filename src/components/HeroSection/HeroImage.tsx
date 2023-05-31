'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { imageVariants } from './animations';

const HeroImage = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={imageVariants}
    className="h-fill relative box-border flex-1 basis-1/2 overflow-hidden rounded-xl border-2 border-zinc-600 dark:border-zinc-400 "
  >
    <Image
      src="/cover.jpg"
      alt="A mid-shot of James"
      fill
      draggable="false"
      priority
      sizes={'50vw'}
      className="object-cover"
    />
  </motion.div>
);

export default HeroImage;
