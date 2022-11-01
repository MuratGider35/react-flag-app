import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Login() {
  return (
    <div className="login  pt-5">
      <div className="container-fluid  justify-content-center bg-dark rounded-4 text-center ">
        <Form>
          <div className="container bg-success  d-flex flex-column justify-content-center align-items-center p-5">
            <input
              className="mb-3  rounded-3 w-50  "
              type="text"
              placeholder="please enter your email.."
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
