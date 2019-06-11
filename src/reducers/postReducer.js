// A reducer is a function that takes the current state and an action
// that was dispatched as it’s parameters and returns the new state.
// Gives new state to the components

const postReducer = (state = [], action) => {

  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    default:
      return state;
  }

}
export default postReducer;