import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login  pt-5">
      <div className="container-fluid  justify-content-center bg-dark rounded-4 text-center ">
        <Form onSubmit={() => navigate("/")}>
          <div className="container bg-success  d-flex flex-column justify-content-center align-items-center p-5">
            <input
              className="mb-3  rounded-3 w-50  "
              type="text"
              placeholder="email.."
              required
            />

            <input
              className="mb-3  rounded-3 w-50  "
              type="password"
              placeholder="password.."
              required
            />
            <Button className="btn m-auto btn-danger w-5" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
