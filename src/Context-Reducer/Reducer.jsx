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

  if (action.type === "HYDATE_USER_BASIC_INFO") {
    return {
      ...state,
      userBasicInfo: { ...action.payload },
    };
  }
  //
  return state;
};
//
export default reducer;
