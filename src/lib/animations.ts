export const fadeDownVariant = {
  initial: { opacity: 0, y: -20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeUpVariant = {
  initial: { opacity: 0, y: 32 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const headingSlideUpVariant = {
  initial: { y: "110%" },
  animate: (wordIndex: number) => ({
    y: 0,
    transition: {
      delay: 0.4 + wordIndex * 0.14,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
