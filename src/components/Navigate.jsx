import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Navbar, Icon, Nav } from "rsuite";
import { logoutUser } from "../store/actions/userAction";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navigate() {
  const history = useHistory();
  const { userItem } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logoutUser(userItem));
    history.push("/");
  }


  return (
    <Navbar>
      <Navbar.Header>
        <Link to={"/"} className="navbar-brand logo">
          HRMS
        </Link>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Link to={"/isler"}>
            <Nav.Item icon={<Icon icon="briefcase" size="lg" />}>
              İşler
            </Nav.Item>
          </Link>
          <Link to={"/isverenler"}>
            <Nav.Item icon={<Icon icon="peoples" size="lg" />}>
              İşverenler
            </Nav.Item>
          </Link>
        </Nav>
        <Nav pullRight>
          {userItem.length > 0 ? (
            <SignedIn signOut={handleSignOut} />
          ) : (
            <SignedOut />
          )}
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}
