import { motion } from 'framer-motion';
import Image from 'next/image';
import { imageVariants } from './animations';

const HeroImage = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={imageVariants}
    className="h-fill y filte relative box-border flex-1 basis-1/2 overflow-hidden rounded-xl border-2 border-slate-300"
  >
    <Image
      src="/cover.jpg"
      alt="A mid-shot of James"
      layout="fill"
      objectFit="cover"
      draggable="false"
      priority
      sizes={'520px, 50vw'}
      className="bg-slate-600 bg-blend-overlay"
    />
  </motion.div>
);

export default HeroImage;
