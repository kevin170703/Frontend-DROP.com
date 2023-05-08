import { useRef } from "react";
import { useState } from "react";

export function useValidateErrors() {
  const [errors, setErrors] = useState({ exist: true });
  const isFirstInputUserName = useRef(true);
  const isFirstInputEmail = useRef(true);
  const isFirstInputPassword = useRef(true);

  function validateErrorsRegister(dataUser) {
    let errors = {};
    const { userName, email, password } = dataUser;

    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const userNameRegex = /^[0-9a-zA-Z]+$/;
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (isFirstInputUserName.current) {
      errors.exist = true;
      isFirstInputUserName.current = userName === "";
    } else if (!userName) {
      errors.userName = "Debe ingresar un nombre de usuario";
    } else if (!userNameRegex.test(userName)) {
      errors.userName = "Solo pude contener numeros y letras";
    }

    if (isFirstInputEmail.current) {
      errors.exist = true;
      isFirstInputEmail.current = email === "";
    } else if (!email) {
      errors.email = "Debe ingresar su correo";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email invalido";
    }

    if (isFirstInputPassword.current) {
      errors.exist = true;
      isFirstInputPassword.current = password === "";
    } else if (!password) {
      errors.password = "Debe ingresar una contraseña";
    } else if (!passwordRegex.test(password)) {
      errors.password = (
        <p>
          Minimo 8 caracteres Maximo 15 <br />
          Al menos una letra mayúscula <br />
          Al menos una letra minucula <br />
          No espacios en blanco <br />
        </p>
      );
    }
    setErrors({ ...errors, exist: Object.keys(errors).length > 0 });
  }

  function validationsLogin(dataUser) {
    let errors = {};
    const { userName, password } = dataUser;

    if (userName === "" || password === "") {
      return setErrors(errors);
    }

    setErrors(errors);
  }

  return { validateErrorsRegister, validationsLogin, errors };
}
