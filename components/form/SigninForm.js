import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import Link from "next/link";
import axios from "axios";
import { useState } from "react";

const initialValues = {
    correo: "",
    password: ""
};


const SigninFormSchema = Yup.object().shape({
    correo: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function SigninForm() {

    const [modifiedData, setModifiedData] = useState({
        correo: "",
        password: ""
      });
    
      const [errorRestaurants, setErrorRestaurants] = useState(null);
    
      const handleSubmit = async e => {
        e.preventDefault();
        console.log(modifiedData);
        try {
          const response = await axios.post('http://localhost:1987/login',
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
                onSubmit={(fields) => {}}
            >
                {({ errors, status, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="form-label">Correo</label>
                                <Field
                                    name="correo"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.correo && touched.correo
                                            ? " is-invalid"
                                            : "")
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
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.password && touched.password
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                <Field
                                    type="checkbox"
                                    name="acceptTerms"
                                    className={
                                        "form-check-input "
                                    }
                                />
                                <label
                                    className="form-check-label"
                                >
                                    Recuerdame
                                </label>
                                </div>
                            </div>
                            <div className="col-6 text-end">
                                <Link href="/reset">
                                <a>¿Olvidaste tu Contraseña?</a>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-3 d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary mr-2"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default SigninForm;
