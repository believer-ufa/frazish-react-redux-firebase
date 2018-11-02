const initState = {
  openModal: false
};

const optionsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      //console.log('TOGGLE_MODAL', { openModal: !state.openModal });
      return { ...state, openModal: !state.openModal };
    default:
      console.log('appReducer event happened');
      return state;
  }
};

export default optionsReducer;
