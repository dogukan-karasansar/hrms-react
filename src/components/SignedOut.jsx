import React from "react";
import { Nav, Icon } from "rsuite";

export default function SignedOut() {
  return (
    <>
      <Nav.Item icon={<Icon icon="user-circle" size="lg" />} href="">
        Giriş Yap
      </Nav.Item>
      <Nav.Item className="nav-item">Kayıt Ol</Nav.Item>
    </>
  );
}
