export const routeVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  final: {
    opacity: 1,
    y: '0px',
    transition: {
      delay: 0.3,
      duration: 0.3,

      type: 'spring',
      mass: 0.6,
      // mass: 0.2,
    },
  },
  finalFromMain: {
    opacity: 1,
    y: '0px',
    transition: {
      delay: 1.2,
      duration: 0.3,

      type: 'spring',
      mass: 0.6,
      // mass: 0.2,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
