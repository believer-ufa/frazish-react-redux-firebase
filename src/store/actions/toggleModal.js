const toggleModal = () => {
  //some async call to db
  return (dispatch, getState) => {
    dispatch({
      type: 'TOGGLE_MODAL'
    });
  };
};

export default toggleModal;
