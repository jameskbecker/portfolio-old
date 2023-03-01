import { motion } from 'framer-motion';
import Image from 'next/image';
import { imageVariants } from './animations';

const HeroImage = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={imageVariants}
    className="h-fill relative box-border flex-grow basis-1/2 overflow-hidden rounded-xl border border-gray-200"
  >
    <Image
      src="/cover.jpg"
      alt="A mid-shot of James"
      layout="fill"
      objectFit="cover"
      draggable="false"
      priority
      sizes={'520px, 50vw'}
    />
  </motion.div>
);

export default HeroImage;
