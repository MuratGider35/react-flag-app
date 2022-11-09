import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { createUser, signUpWithGoogle } from "../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  const handlesubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    createUser(email, password, navigate, displayName);
  };
  return (
    <div className="login  pt-5">
      <div className="container-fluid  justify-content-center bg-dark rounded-4 text-center ">
        <Form onSubmit={handlesubmit}>
          <div className="container bg-success  d-flex flex-column justify-content-center align-items-center p-5">
            <input
              className="mb-3  rounded-1   "
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="mb-3  rounded-1   "
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="mb-3  rounded-1   "
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="mb-3  rounded-1   "
              type="password"
              placeholder="password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-col">
              <Button className="btn btn-primary bg-black " type="submit">
                Register
              </Button>
              <Button
                onClick={handleGoogleProvider}
                className="btn btn-primary bg-black "
                type="button"
              >
                Continue with Google
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
