import axios from "axios";

export const register = (data) => {
  console.log(data);
  return async function (distpach) {
    const user = await axios.post("http://localhost:3001/users/create", data);
    return distpach({ type: "REGISTER", payload: user.data });
  };
};
