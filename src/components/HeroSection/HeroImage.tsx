'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { imageVariants } from './animations';

const HeroImage = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={imageVariants}
    className="h-fill y filte relative box-border flex-1 basis-1/2 overflow-hidden rounded-xl border border-slate-300"
  >
    <Image
      src="/cover.jpg"
      alt="A mid-shot of James"
      fill
      draggable="false"
      priority
      sizes={'50vw'}
      className="bg-slate-600 object-cover bg-blend-overlay"
    />
  </motion.div>
);

export default HeroImage;
