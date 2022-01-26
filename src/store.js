import { createStore } from "redux";

const INITIAL_USER = {
  loading: false,
  users: [],
};

function user(state = INITIAL_USER, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOAD_USER":
      return { ...state, loading: false, users: [...state.users, action.payload] };
    case "SAVE_USER":
      return { ...state, loading: false, users: [...state.users, action.payload] };
    default:
      return state;
  }
}

const store = createStore(user);

export default store;
