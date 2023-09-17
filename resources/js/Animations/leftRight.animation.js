const leftRightAnimation = (inView, duration, x) => {
  const config = {
    initial: "initial", // "initial" is the name of the variant, not the state

    variants: {
      initial: { x, opacity: 0 },

      animate: {
        x: 0,

        opacity: 1,

        transition: { duration, ease: "easeOut" },
      },
    },
  };

  return inView
    ? { ...config, whileInView: "animate" }
    : { ...config, animate: "animate" };
};

export { leftRightAnimation };
