export type inititialStateType = {
  count: number;
};

export type payloadType = {
  value: number;
};

export type actionType = {
  type: string;
  payload?: payloadType;
};

export const initialState: inititialStateType = {
  count: 0,
};

export const counterReducer = (
  state: inititialStateType,
  action: actionType
) => {
  switch (action.type) {
    case "increment":
      return (state = {
        ...state,
        count: state.count + (action?.payload?.value ?? 1),
      });
    case "decrement":
      return (state = {
        ...state,
        count: state.count - (action?.payload?.value ?? 1),
      });
    default:
      return state;
  }
};
