// export function getServices() {
//   return async function (distpach) {
//     const services = await axios("/posts");
//     return distpach({ type: "GET_SERVICES", payload: services.data });
//   };
// }

export const register = (data) => {
  return async function (distpach) {
    const user = await axios.put("http://localhost:3001/users/create", data);
    return distpach({ type: "REGISTER", payload: user.data });
  };
};
