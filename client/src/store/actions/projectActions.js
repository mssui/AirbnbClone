export const createProject = project => {
  return (dispatch, getState) => {
    // I can make DB calls here
    dispatch({
      type: "CREATE_PROJECT",
      project: project
    });
  };
};
