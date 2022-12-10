import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import Router from 'next/router';
import axios from "axios";
import { useState } from "react";

// Agregar Campos al Objeto
const initialValues = {
  correo: "",
  password: "",
  nombres: "",
  paterno: "",
  materno: "",
  fecha_nacimiento: "",
  gamertag: "",
  avatar: "",
};

const SignupFormSchema = Yup.object().shape({
  // Validaciones
  nombres: Yup.string().required("El nombre es un campo obligatorio"),
  paterno: Yup.string().required("El nombre es un campo obligatorio"),
  correo: Yup.string().required("El nombre es un campo obligatorio"),
  gamertag: Yup.string().required("El GamerTag es un campo obligatorio"),
  avatar: Yup.string().required("El Avatar es un campo obligatorio"),
});

function SignupForm() {
  const [modifiedData, setModifiedData] = useState({
    correo: "",
    password: "",
    nombres: "",
    paterno: "",
    materno: "",
    fecha_nacimiento: "",
    gamertag: "",
    avatar: "",
  });

  const [errorRestaurants, setErrorRestaurants] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(modifiedData);
    try {
      const response = await axios.post('http://localhost:1987/player/register',
        {
          data: modifiedData,
        }
      );
      console.log(response);
    } catch (error) {
      setErrorRestaurants(error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Formik 
        initialValues={initialValues}
        // validationSchema={SignupFormSchema}
        onSubmit={(fields) => {

        }}
      >
        {({ errors, status, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 mb-3">
                <label className="form-label">Correo</label>
                <Field
                  name="correo"
                  type="email"
                  value={modifiedData.correo}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (errors.correo && touched.correo ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="correo"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Contraseña</label>
                <Field
                  name="password"
                  type="password"
                  value={modifiedData.password}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Nombre</label>
                <Field
                  name="nombres"
                  type="text"
                  value={modifiedData.nombres}
                  onChange={handleChange}
                  required
                  className={
                    "form-control" +
                    (errors.nombres && touched.nombres ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="nombres"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Apellido Paterno</label>
                <Field
                  name="paterno"
                  type="text"
                  value={modifiedData.paterno}
                  onChange={handleChange}
                  required
                  className={
                    "form-control" +
                    (errors.paterno && touched.paterno ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="paterno"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Apellido Materno</label>
                <Field
                  name="materno"
                  type="text"
                  value={modifiedData.materno}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (errors.materno && touched.materno ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="materno"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">GamerTag</label>
                <Field
                  name="gamertag"
                  type="text"
                  value={modifiedData.gamertag}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (errors.gamertag && touched.gamertag ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="gamertag"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Fecha de Nacimiento</label>
                <Field
                  name="fecha_nacimiento"
                  type="date"
                  value={modifiedData.fecha_nacimiento}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (errors.fecha_nacimiento && touched.fecha_nacimiento
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="fecha_naciemiento"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">URL del Avatar</label>
                <Field
                  name="avatar"
                  type="text"
                  value={modifiedData.avatar}
                  onChange={handleChange}
                  className={
                    "form-control" +
                    (errors.avatar && touched.avatar ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="avatar"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="mt-3 d-grid gap-2">
              {/* <button type="submit" onClick={() => Router.push('/signin')} className="btn btn-primary mr-2"> */}
              <button type="submit" className="btn btn-primary mr-2">
                Registrarse
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignupForm;
