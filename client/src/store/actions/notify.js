export const notify = id => {
  return (dispatch, getState) => {
    // I can make DB calls here
    dispatch({
      type: "INCREASE_NUMBER",
      id: id
    });
  };
};
