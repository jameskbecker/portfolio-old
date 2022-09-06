import Discord from '@/assets/icons/discord.svg';
import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/github.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import { BodySmall } from '@/components/typography/Body';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { flashVariants } from './animations';
import { StyledContactButton } from './styles';

type ContactButtonProps = {
  label: string;
  href: string;
  delay: number;
};

const ContactButton = (props: ContactButtonProps) => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const inView = useInView(ref);
  const theme = useContext(ThemeContext);

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
        return <Github />;

      case 'discord':
        return <Discord />;

      case 'linkedin':
        return <LinkedIn />;

      case 'email':
        return <Envelope />;
    }
  };

  return (
    <StyledContactButton
      href={props.href}
      target="-1"
      ref={ref}
      initial="initial"
      animate={controls}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      variants={flashVariants(theme, props.delay)}
    >
      <RenderIcon label={props.label} />
      <BodySmall>{props.label}</BodySmall>
    </StyledContactButton>
  );
};

export default ContactButton;
