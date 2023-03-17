import { motion } from 'framer-motion';
import { aboutVariants, headingVariants } from './animations';
import CallToAction from './CallToAction';

export type HeroInfoProps = {
  heading: string;
  description: string;
  href: string;
};

const HeroInfo = (props: HeroInfoProps) => (
  <div className="box-border flex flex-shrink basis-1/2 flex-col justify-center gap-8 align-middle">
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={headingVariants}
      className="text-4xl font-semibold text-slate-900 dark:text-zinc-100 md:text-5xl"
    >
      {props.heading}
    </motion.h2>
    <motion.p
      initial="hidden"
      animate="visible"
      variants={aboutVariants}
      className="md:text-md overflow-hidden text-base font-thin text-slate-800 dark:text-zinc-300 lg:text-xl"
    >
      {props.description}
    </motion.p>
    <CallToAction href={props.href} label="Get in Touch!" />
  </div>
);

export default HeroInfo;
