const scaleAnimation = (inView, start, end, duration, delay) => {
  const config = {
    initial: "initial", // "initial" is the name of the variant, not the state

    variants: {
      initial: { scale: start },

      animate: {
        scale: end,

        transition: { duration, delay },
      },
    },
  };

  return inView
    ? { ...config, whileInView: "animate" }
    : { ...config, animate: "animate" };
};


export { scaleAnimation };