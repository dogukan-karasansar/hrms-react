import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Form,
  ButtonToolbar,
  Button,
  Schema,
  FormGroup,
  ControlLabel,
  FormControl,
} from "rsuite";
import LoginService from "../../services/auth/LoginService";
import { loginUser } from "../../store/actions/userAction";

const { StringType } = Schema.Types;
const model = Schema.Model({
  password: StringType().isRequired("Şifre gerekli."),
  email: StringType()
    .isEmail("Lütfen gerçek bir email adresi girin")
    .isRequired("Email gerekli."),
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <FormGroup>
      <ControlLabel style={{ textAlign: "left" }}>{label} </ControlLabel>
      <FormControl name={name} accepter={accepter} {...rest} />
    </FormGroup>
  );
}

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  function login(email, password) {
    let loginService = new LoginService();
    loginService.login(email, password).then((result) => {
      dispatch(loginUser(result.data.data));
      history.push("/");
    });
  }
  return (
    <div align="center">
      <Form style={{ marginTop: "10%", width: "50%" }} fluid model={model}>
        <TextField
          name="email"
          label="Email"
          error={""}
          type="email"
          block="true"
          value={email}
          onChange={(value) => setEmail(value || "")}
        />
        <TextField
          name="password"
          label="Password"
          error={""}
          type="password"
          value={password}
          onChange={(value) => setPassword(value || "")}
        />
        <ButtonToolbar>
          <Button
            color={"cyan"}
            type="submit"
            onClick={() => login(email, password)}
            size={"lg"}
            block="true"
          >
            Giriş
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default Login;
