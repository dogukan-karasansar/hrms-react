import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Navbar, Icon, Nav } from "rsuite";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navigate() {
  const history = useHistory();
  var id = localStorage.getItem("userId");

  function handleSignOut() {
    localStorage.removeItem("userId");
    history.push("/");
    window.location.reload();
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
          {id ? <SignedIn signOut={handleSignOut} /> : <SignedOut />}
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}
