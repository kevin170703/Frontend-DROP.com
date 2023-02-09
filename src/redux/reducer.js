const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  posts: [],
};

function setInLocalStorage(key, state) {
  localStorage.setItem(key, JSON.stringify(state));
  return state;
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "REGISTER":
      return { ...state, user: setInLocalStorage("user", payload) };
    case "LOGIN":
      return { ...state, user: setInLocalStorage("user", payload) };
    default:
      return { ...state };
  }
}
