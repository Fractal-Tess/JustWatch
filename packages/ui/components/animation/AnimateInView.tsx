import {
  type Transition,
  type Variant,
  motion,
  useAnimation,
  useInView
} from 'framer-motion';
import { useRef, useEffect, PropsWithChildren } from 'react';

type Variants = {
  visible: Variant;
  hidden: Variant;
};

type Props = {
  variants?: Variants;
  transition?: Transition;
} & PropsWithChildren;

const defaultVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const defaultTransition: Transition = {
  ease: 'easeOut',
  duration: 1.5,
  delay: 0.4
};

export function GenericAnimation({
  children,
  variants = defaultVariants,
  transition = defaultTransition
}: Props) {
  const controls = useAnimation();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={transition}
      animate={controls}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
}
