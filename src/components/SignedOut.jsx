import React from "react";
import { Link } from "react-router-dom";
import { Nav, Icon } from "rsuite";

export default function SignedOut() {
  return (
    <>
      <Link to={"giris-yap"}>
        <Nav.Item icon={<Icon icon="user-circle" size="lg" />}>
          Giriş Yap
        </Nav.Item>
      </Link>
      <Link to={"kayit-ol"}>
        <Nav.Item className="nav-item">Kayıt Ol</Nav.Item>
      </Link>
    </>
  );
}
