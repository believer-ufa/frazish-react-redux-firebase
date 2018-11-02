const addAuthor = author => {
  //some async call to db
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_AUTHOR',
      author
    });
  };
};

export default addAuthor;
