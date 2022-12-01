const reducer = (state, action) => {
  //
  if (action.type === "SUBMIT_NEW_CLIENT_TO_USER") {
    return {
      ...state,
      clients: [...state.clients, { ...action.payload }],
    };
  }
  //
  if (action.type === "HYDRATE_USER_CLIENTS") {
    return {
      ...state,
      clients: [...action.payload],
    };
  }
  //
  if (action.type === "HYDATE_USER_BASIC_INFO") {
    return {
      ...state,
      userInfo: { ...action.payload },
    };
  }
  //
  return state;
};
//
export default reducer;
