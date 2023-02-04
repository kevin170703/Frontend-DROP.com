const initialState = {
  user: {},
  posts: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "REGISTER":
      return { user: payload };
    default:
      return { ...state };
  }
}
