import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CreateProduct.module.css";
import { createProduct } from "../../redux/action";
import Swal from "sweetalert2";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function CreateProduct() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState({
    nameProduct: "",
    stock: "",
    price: "",
    userId: user.id,
  });
  const [errors, setErrors] = useState({});

  function updataOfProducts(e) {
    e.preventDefault();
    setDataProduct({ ...dataProduct, [e.target.name]: e.target.value });
    setErrors(validate({ ...dataProduct, [e.target.name]: e.target.value }));
  }

  function submitData(e) {
    e.preventDefault();
    if (
      dataProduct.nameProduct === "" ||
      dataProduct.stock === "" ||
      dataProduct.price === ""
    )
      return Swal.fire({
        icon: "error",
        title: "Algun campo se encuentra incompeto",
      });
    dispatch(createProduct(dataProduct));
  }

  function validate(dataProduct) {
    let errors = {};
    const priceRegex = /^[0-9]+$/;
    if (!dataProduct.nameProduct) errors.nameProduct = "Campo obligatorio";

    if (!dataProduct.stock) errors.stock = "Campo obligatorio";
    else if (!priceRegex.test(dataProduct.stock))
      errors.stock = "Solo se permiten numeros";

    if (!dataProduct.price) errors.price = "Campo obligatorio";
    else if (!priceRegex.test(dataProduct.price))
      errors.price = "Solo se permiten numeros";

    return errors;
  }

  return (
    <div className={style.contentAll}>
      <form
        action=""
        className={style.formCreate}
        onSubmit={(e) => submitData(e)}
      >
        <NavLink to="/dashboard" className={style.buttonBack}>
          <BiLeftArrowAlt size="40" />
        </NavLink>
        <h1>Crea un producto</h1>

        <div className={style.contentInputs}>
          <input
            type="text"
            placeholder="Nombre de el producto"
            name="nameProduct"
            value={dataProduct.nameProduct}
            onChange={(e) => updataOfProducts(e)}
          />
          {errors.nameProduct && (
            <p className={style.errors}>{errors.nameProduct}</p>
          )}
        </div>
        <div className={style.contentInputs}>
          <input
            type="text"
            placeholder="Precio"
            name="price"
            value={dataProduct.price}
            onChange={(e) => updataOfProducts(e)}
          />
          {errors.price && <p className={style.errors}>{errors.price}</p>}
        </div>
        <div className={style.contentInputs}>
          <input
            type="text"
            placeholder="cantidad"
            name="stock"
            value={dataProduct.stock}
            onChange={(e) => updataOfProducts(e)}
          />
          {errors.stock && <p className={style.errors}>{errors.stock}</p>}
        </div>
        <button
          type="submit"
          className={
            !errors.nameProduct &&
            !errors.stock &&
            !errors.price &&
            dataProduct.nameProduct
              ? style.buutonRegister
              : style.buutonRegisteDisable
          }
        >
          Crear
        </button>
      </form>
    </div>
  );
}
