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

    if (userName === "" || email === "" || password === "")
      return setErrors({ exist: true });

    if (isFirstInputUserName.current) {
      isFirstInputUserName.current = userName === "";
    } else if (!userName) {
      errors.exist = true;
      errors.userName = "Debe ingresar un nombre de usuario";
    } else if (!userNameRegex.test(userName)) {
      errors.exist = true;
      errors.userName = "Solo pude contener numeros y letras";
    }

    if (isFirstInputEmail.current) {
      isFirstInputEmail.current = email === "";
    } else if (!email) {
      errors.exist = true;
      errors.email = "Debe ingresar su correo";
    } else if (!emailRegex.test(email)) {
      errors.exist = true;
      errors.email = "Email invalido";
    }

    if (isFirstInputPassword.current) {
      isFirstInputPassword.current = password === "";
    } else if (!password) {
      errors.exist = true;
      errors.password = "Debe ingresar una contraseña";
    } else if (!passwordRegex.test(password)) {
      errors.exist = true;
      errors.password = (
        <p>
          Minimo 8 caracteres Maximo 15 <br />
          Al menos una letra mayúscula <br />
          Al menos una letra minucula <br />
          No espacios en blanco <br />
        </p>
      );
    }
    setErrors(errors);
  }

  function validationsLogin(dataUser) {
    let errors = {};
    const { userName, password } = dataUser;

    if (userName === "" || password === "") {
      errors.exist = true;
      return setErrors(errors);
    }

    setErrors(errors);
  }

  return { validateErrorsRegister, validationsLogin, errors };
}
