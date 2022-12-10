import Link from "next/link";

const Reset = () => {
    
    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-4 col-md-5">
                            <div className="mini-logo text-center my-3">
                            <Link href="/">
                                    <a>
                                        <img src="./images/logo.png" alt="" />
                                    </a>
                                </Link>
                                <h4 className="card-title mt-5">Restablecer Contraseña</h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form
                                        className="row g-3"
                                    >
                                        <div className="col-12">
                                            <label className="form-label">
                                                Correo
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="user@example.com"
                                            />
                                        </div>
                                        <div className="text-center mt-4">
                                            <a
                                                className="btn btn-primary btn-block w-100"
                                            >
                                                Enviar
                                            </a>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                            
                                        <p>
                                            ¿No te llegó el código?
                                            <Link href="/otp-1">
                                                
                                            <a
                                                className="text-primary"                                                
                                                >
                                                Reenviar
                                            </a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reset;