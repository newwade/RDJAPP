const initialState = {
  user: false,
};
const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: false,
      };
    default:
      return state;
  }
};
export default addReducer;
