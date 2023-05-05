import { useRef } from "react";
import { useState } from "react";

export function useValidateErrors() {
  const [errors, setErrors] = useState({ exist: true });
  const isFirstInputUserName = useRef(true);
  const isFirstInputEmail = useRef(true);
  const isFirstInputPassword = useRef(true);

  function validateErrors(dataUser) {
    let errors = {};
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const userNameRegex = /^[0-9a-zA-Z]+$/;
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (
      dataUser.userName === "" ||
      dataUser.email === "" ||
      dataUser.password === ""
    )
      return setErrors({ exist: true });

    if (isFirstInputUserName.current) {
      isFirstInputUserName.current = dataUser.userName === "";
    } else if (!dataUser.userName) {
      errors.exist = true;
      errors.userName = "Debe ingresar un nombre de usuario";
    } else if (!userNameRegex.test(dataUser.userName)) {
      errors.exist = true;
      errors.userName = "Solo pude contener numeros y letras";
    }

    if (isFirstInputEmail.current) {
      isFirstInputEmail.current = dataUser.email === "";
    } else if (!dataUser.email) {
      errors.exist = true;
      errors.email = "Debe ingresar su correo";
    } else if (!emailRegex.test(dataUser.email)) {
      errors.exist = true;
      errors.email = "Email invalido";
    }

    if (isFirstInputPassword.current) {
      isFirstInputPassword.current = dataUser.password === "";
    } else if (!dataUser.password) {
      errors.exist = true;
      errors.password = "Debe ingresar una contraseña";
    } else if (!passwordRegex.test(dataUser.password)) {
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
  function validateErrorsSubmit(dataUser) {}
  return { validateErrors, validateErrorsSubmit, errors };
}
