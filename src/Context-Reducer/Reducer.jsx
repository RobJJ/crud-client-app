const reducer = (state, action) => {
  if (action.type === "ADD_CLIENT") {
    return {
      ...state,
      uniqueClients: state.uniqueClients + 1,
      clients: [
        ...state.clients,
        {
          ...action.payload,
          uniqueClient: state.uniqueClients + 1,
          joined: action.payload.dateJoined,
        },
      ],
    };
  }

  //   if (action.type === "HYDRATE_USER_STATE") {
  //     return {
  //       ...action.payload,
  //     };
  //   }
  //
  return state;
};
//
export default reducer;
