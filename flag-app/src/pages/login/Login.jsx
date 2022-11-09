import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../auth/firebase";
import { signUpWithGoogle } from "../../auth/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);

    navigate("/");
  };
  return (
    <div className="login  pt-5">
      <div className="container-fluid  justify-content-center bg-dark rounded-4 text-center ">
        <Form onSubmit={handleSubmit}>
          <div className="container bg-success  d-flex flex-column justify-content-center align-items-center p-5">
            <input
              className="mb-3  rounded-1  "
              type="text"
              placeholder="email.."
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="mb-3  rounded-1 "
              type="password"
              placeholder="password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="btn bg-black m-auto mb-3 btn-danger "
              type="submit"
            >
              Login
            </Button>
            <Button
              onClick={handleGoogleProvider}
              className="btn bg-black m-auto btn-danger "
              type="button"
            >
              Continue with Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
