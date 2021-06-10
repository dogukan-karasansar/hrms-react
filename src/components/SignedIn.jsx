import React from "react";
import { Avatar, Dropdown, Icon, Nav } from "rsuite";

export default function SignedIn() {
  let check = false;
  return (
    <div style={{ position: "fixed", right: 15, marginTop: -10 }}>
      <Dropdown
        noCaret
        icon={
          check ? (
            <Avatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
          ) : (
            <Avatar src="https://404.error" alt="DK" />
          )
        }
      >
        <Dropdown.Item icon={<Icon icon="info" />}>Bilgilerim</Dropdown.Item>
        <Dropdown.Item icon={<Icon icon="sign-out" />}>Çıkış Yap</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
