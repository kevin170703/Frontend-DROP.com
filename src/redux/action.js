import axios from "axios";
import Swal from "sweetalert2";

export const getImages = (idUser) => {
  return async function (distpach) {
    const images = await axios.get(`http://localhost:3001/files/${idUser}`);
    return distpach({ type: "GET_IMAGES", payload: images.data });
  };
};

export const putImages = (data) => {
  return async function (distpach) {
    await axios.post(`http://localhost:3001/upload`, data);
  };
};

export const register = (data) => {
  return async function (distpach) {
    const user = await axios.post("http://localhost:3001/users/create", data);
    Swal.fire({
      icon: "success",
      title: `Usuario creado correctamente`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
    return distpach({ type: "REGISTER", payload: user.data });
  };
};

export const login = (data) => {
  return async function (distpach) {
    try {
      const user = await axios.post("http://localhost:3001/login", data);
      console.log(user.data, "siiiiiiiiiiii");
      distpach({ type: "LOGIN", payload: user.data });
      return Swal.fire({
        icon: "success",
        title: `iniciaste sesion correctamente`,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    } catch (error) {
      console.log(error);
      return Swal.fire({
        icon: "error",
        title: `${error.response.data.error}`,
      });
    }
  };
};
