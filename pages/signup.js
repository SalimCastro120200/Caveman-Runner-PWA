import Link from "next/link";
import SignupForm from "../components/form/SignupForm";

function SignUp() {
  return (
    <>
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-4">
                <Link href="/">
                  <a>
                    <img src="./images/logo.png" alt="" />
                  </a>
                </Link>
                <h4 className="card-title mt-5">Registrate a Caveman Runner</h4>
              </div>
              <div className="auth-form card">
                <div className="card-body">
                  <SignupForm />
                  <div className="text-center">
                    <p className="mt-3 mb-0">
                      <Link href="/signin">
                        <a className="text-primary">Inicia Sesión</a>
                      </Link>
                      con tu Cuenta
                    </p>
                  </div>
                </div>
              </div>
              <div className="privacy-link">
                <Link href="#">
                  <a>Have an issue with 2-factor authentication?</a>
                </Link>
                <br />
                <Link href="#">
                  <a>Privacy Policy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// SignUp.getInitialProps = async ctx => {
// //   e.preventDefault();

//   const { correo, password, nombres, paterno, materno, fecha_nacimiento, gamertag } = this.state;
//   if (correo === ""|| password === ""|| nombres === "" || paterno === "" || fecha_nacimiento === "" ||  gamertag === "") {
//     this.setState({ error: true });
//     return;
//   }
//   this.setState({ error: false });

//   let url = `http://localhost:3307/player/register`;
//   await axios
//     .post(url, {
//       correo: correo,
//       password: password,
//       nombres: nombres,
//       paterno: paterno,
//       materno: materno,
//       fecha_nacimiento: fecha_nacimiento,
//       gamertag: gamertag

//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

SignUp.getInitialProps = async ctx => {
    try {
      const res = await axios.post('http://localhost:5000/player/register');
      const games = res.data;
      return { games };
    } catch (error) {
      return { error };
    }
  };

export default SignUp;
