import { createStore } from 'redux';

const initialState = {
  darkMode: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIGHT_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
