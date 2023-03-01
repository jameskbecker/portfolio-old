import {
  AnimationControls,
  ForwardRefComponent,
  HTMLMotionProps,
  TargetAndTransition,
  Transition,
  VariantLabels,
  Variants,
} from 'framer-motion';

export type ButtonProps = {
  initial?: any;
  animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition;
  variants?: Variants;
  transition?: Transition;
  label?: string;
  ghost?: boolean;
  onClick?: any;
};
