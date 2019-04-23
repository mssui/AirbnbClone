export const notify = id => {
  return (dispatch, getState) => {
    dispatch({
      type: "INCREASE_NUMBER",
      id: id
    });
  };
};
