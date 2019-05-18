const onButtonClick = (type, content) => {
  return {
    type,
    payload: content
  };
};

export { onButtonClick };
