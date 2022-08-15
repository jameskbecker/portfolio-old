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
  as: ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'button'>>;
  initial?: any;
  animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition;
  variants?: Variants;
  transition?: Transition;
  label?: string;
  onClick?: any;
};
