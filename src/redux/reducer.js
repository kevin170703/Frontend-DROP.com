const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  images: localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images"))
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
    case "GET_IMAGES":
      return { ...state, images: setInLocalStorage("images", payload) };
    default:
      return { ...state };
  }
}
