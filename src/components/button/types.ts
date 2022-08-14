import {
  AnimationControls,
  ForwardRefComponent,
  HTMLMotionProps,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion';

export type ButtonProps = {
  as: ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'button'>>;
  initial?: any;
  animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition;
  transition?: Transition;
  label?: string;
  onClick?: any;
};
