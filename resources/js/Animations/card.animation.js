const childrenCardAnimation = {
  variants: {
    initial: { y: "30%", scale: 0.8, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
  },
  transition: { duration: 0.5, ease: "easeOut" },
};

/**
 * @type {import("framer-motion").MotionProps}
 */

const fatherCardAnimation = (inView = false) => {
  const config = {
    initial: "initial",

    variants: {
      initial: { opacity: 0 },

      animate: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
  };

  return inView
    ? {
        ...config,
        whileInView: "animate",
      }
    : {
        ...config,
        animate: "animate",
      };
};

export { childrenCardAnimation, fatherCardAnimation };
