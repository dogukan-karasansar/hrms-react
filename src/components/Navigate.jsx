import React, { useState } from "react";
import { Navbar, Icon, Nav } from "rsuite";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navigate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Navbar>
      <Navbar.Header>
        <a href="!#" className="navbar-brand logo">
          HRMS
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="briefcase" size="lg" />}>İşler</Nav.Item>
          <Nav.Item icon={<Icon icon="peoples" size="lg" />}>
            İşverenler
          </Nav.Item>
        </Nav>
        <Nav pullRight>{isAuthenticated ? <SignedIn /> : <SignedOut />}</Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Navigate;
