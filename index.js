const tag = (strings, ...keys) => {
  if (!Array.isArray(strings)) {
    return () => "";
  }

  const join = (...args) =>
    strings.reduce((accumulator, current, index) => {
      accumulator += current;

      if (!keys.hasOwnProperty(index)) {
        return accumulator;
      }

      return (
        accumulator +
        (typeof keys[index] === "function" ? keys[index](...args) : keys[index])
      );
    }, "");

  return join;
};

export default tag;
