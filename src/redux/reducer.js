const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  posts: localStorage.getItem("posts")
    ? JSON.parse(localStorage.getItem("posts"))
    : [],
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
    case "SEARCH_PRODUCTS_USER":
      return { ...state, posts: setInLocalStorage("posts", payload) };
    default:
      return { ...state };
  }
}
