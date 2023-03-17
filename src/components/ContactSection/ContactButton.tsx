'use client';

import Discord from '@/assets/icons/discord.svg';
import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/github.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { flashVariants } from './animations';

type ContactButtonProps = {
  label: string;
  href: string;
  delay: number;
};

const ContactButton = (props: ContactButtonProps) => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) {
      controls.start('initial');
      return;
    }
    controls.start('flash');
  });

  const handleHover = () => {
    controls.start('hover');
  };

  const handleHoverEnd = () => {
    controls.start('initial');
  };

  const RenderIcon = ({ label }: any) => {
    switch (label.toLowerCase()) {
      case 'github':
        return <Github className="fill-gray-700 dark:fill-gray-300" />;

      case 'discord':
        return <Discord className="fill-gray-700 dark:fill-gray-300" />;

      case 'linkedin':
        return <LinkedIn className="fill-gray-700 dark:fill-gray-300" />;

      case 'email':
      default:
        return <Envelope className="fill-gray-700 dark:fill-gray-300" />;
    }
  };

  return (
    <motion.a
      href={props.href}
      target="-1"
      ref={ref}
      initial="initial"
      animate={controls}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      variants={flashVariants(props.delay)}
      className="hov:opacity-100 flex flex-col items-center gap-3 overflow-hidden p-2 text-5xl opacity-70 focus:outline-amber-300 dark:focus:outline-amber-400"
    >
      <RenderIcon label={props.label} />
      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-light text-gray-700 dark:text-gray-300 md:text-lg">
        {props.label}
      </div>
    </motion.a>
  );
};

export default ContactButton;
