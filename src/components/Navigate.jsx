import React from "react";
import { Navbar, Icon, Nav } from "rsuite";

const Navigate = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <a href="#" className="navbar-brand logo">
          HRMS
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="briefcase" size="lg" />}>İşler</Nav.Item>
          <Nav.Item icon={<Icon icon="peoples" size="lg" />}>İşverenler</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="user-circle" size="lg" />}>Giriş Yap</Nav.Item>
          <Nav.Item className="nav-item">Kayıt Ol</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default Navigate;
