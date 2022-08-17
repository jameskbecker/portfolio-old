import { wrap } from '@motionone/utils';
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { useRef } from 'react';
import { Scroller, StyledParallaxText } from './styles';
import { ParallaxTextProps } from './types';

const smoothConfig = {
  damping: 50,
  stiffness: 400,
};

const ParallaxText = ({ children, baseSpeed }: ParallaxTextProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollSpeed = useVelocity(scrollY);
  const smoothSpeed = useSpring(scrollSpeed, smoothConfig);
  const speedFactor = useTransform(smoothSpeed, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const prevTs = useRef<number>(0);

  const isScrollingUp = () => speedFactor.get() < 0;
  const isScrollingDown = () => speedFactor.get() > 0;

  useAnimationFrame((ts) => {
    if (!prevTs.current) prevTs.current = ts;

    const timeDelta = ts - prevTs.current;
    let moveBy = directionFactor.current * baseSpeed * (timeDelta / 1000);

    if (isScrollingUp()) {
      if (speedFactor.get() < -5) speedFactor.set(-5);
      directionFactor.current = -1;
    } else if (isScrollingDown()) {
      if (speedFactor.get() > 5) speedFactor.set(5);
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * speedFactor.get();
    baseX.set(baseX.get() + moveBy);
    prevTs.current = ts;
  });

  return (
    <StyledParallaxText>
      <Scroller style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </Scroller>
    </StyledParallaxText>
  );
};

export default ParallaxText;
