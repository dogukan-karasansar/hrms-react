import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
  Button,
  FormControl,
  Alert,
} from "rsuite";
import SytemPersonnelService from "../../services/system-personnel/SytemPersonnelService";
import { logoutUser } from "../../store/actions/userAction";

export default function PersonelInformation() {
  const { userItem } = useSelector((state) => state.user);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const updatePersonnel = (user, email, password) => {
    let systemPersonnelService = new SytemPersonnelService();
    let firstName = user.firstName;
    let lastName = user.lastName;
    let personnelId = user.id;
    let userId = user.user.id;
    if (email === "") {
      email = user.user.email;
    } else if (password === "") {
      password = user.user.password;
    }
    console.log(user.user.id);
    console.log(email);
    console.log(password);
    return systemPersonnelService
      .updatePersonnel(
        firstName,
        lastName,
        personnelId,
        userId,
        email,
        password
      )
      .then((res) => {
        history.push("/");
        dispatch(logoutUser(userItem));
        Alert.success(res.data.message);
      })
      .catch((e) => {
        Alert.error("Hata");
      });
  };

  return (
    <div>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Ad</ControlLabel>
          <FormControl
            disabled={true}
            name="firstName"
            value={userItem[0].user.firstName}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Ad</ControlLabel>
          <FormControl
            disabled={true}
            name="lastName"
            value={userItem[0].user.lastName}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            name="email"
            type="email"
            value={email}
            onChange={(value) => setemail(value)}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            name="password"
            type="password"
            onChange={(value) => setpassword(value)}
            value={password}
          />
        </FormGroup>

        <FormGroup>
          <ButtonToolbar style={{ float: "right" }}>
            <Button
              onClick={() => updatePersonnel(userItem[0].user, email, password)}
              color={"yellow"}
            >
              Güncelle
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
}
