import { scrollReverseVariants, scrollVariants } from './animations';
import { StyledMarquee } from './styles';
import { MarqueeProps } from './types';

const Marquee = ({ children, reverse }: MarqueeProps) => {
  return (
    <StyledMarquee
      initial="start"
      animate="end"
      variants={reverse ? scrollReverseVariants : scrollVariants}
    >
      <div>
        {children}
        {children}
      </div>
    </StyledMarquee>
  );
};

export default Marquee;
