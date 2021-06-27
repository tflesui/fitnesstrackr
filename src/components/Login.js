import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {
   Alert,
   UncontrolledAlert,
   Button, 
   Card, 
   CardTitle, 
   FormGroup, 
   Label 
} from 'reactstrap';

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <UncontrolledAlert color="danger">
        This field is required!
      </UncontrolledAlert>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-4 mt-3 mx-auto">
      <Card className="card card-container">
        <CardTitle><h3>Login</h3></CardTitle>
       
        <Form onSubmit={handleLogin} ref={form}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </FormGroup>

          <FormGroup>
            <Button color="primary" className="m-2" block disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </Button>
          </FormGroup>

          {message && (
            <FormGroup>
              <Alert color="danger">
                {message}
              </Alert>
            </FormGroup>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </Card>
    </div>
  );
};

export default Login;