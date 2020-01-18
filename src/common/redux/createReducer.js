export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers && action.type in handlers) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export const getStateFromReducer = (state$, context) => {
  const state = state$.value || {};
  return (context ? state[context] : state) || {};
};
