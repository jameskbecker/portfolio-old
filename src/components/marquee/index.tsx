import { StyledMarquee } from './styles';
import { MarqueeProps } from './types';

const Marquee = ({ children, ...props }: MarqueeProps) => {
  return (
    <StyledMarquee {...props}>
      <div>
        {children}
        {children}
      </div>
    </StyledMarquee>
  );
};

export default Marquee;
