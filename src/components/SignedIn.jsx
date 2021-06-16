import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Icon } from "rsuite";

export default function SignedIn({ signOut }) {
  let checkImage = false;

  const userType = localStorage.getItem("userType");
  const userName = localStorage.getItem("userName");

  return (
    <div style={{ position: "fixed", right: 50, marginTop: -10 }}>
      <Dropdown
        noCaret
        icon={
          checkImage ? (
            <Avatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
          ) : (
            <Avatar src="https://404.error" alt={userName.slice(0, 2)} />
          )
        }
      >
        <Dropdown.Item icon={<Icon icon="info" />}>Bilgilerim</Dropdown.Item>
        {userType === "employer" ? (
          <>
            <Link to={"ilanlarim"}>
              <Dropdown.Item icon={<Icon icon="list" />}>
                İlanlarım
              </Dropdown.Item>
            </Link>
            <Link to={"ilan-ekle"}>
              <Dropdown.Item icon={<Icon icon="plus-circle" />}>
                İlan Ekle
              </Dropdown.Item>
            </Link>
          </>
        ) : userType === "jobSeeker" ? (
          <Dropdown.Item icon={<Icon icon="info" />}>
            Başvurularım
          </Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item icon={<Icon icon="info" />}>İlanlar</Dropdown.Item>
            <Dropdown.Item icon={<Icon icon="info" />}>
              Başvurular
            </Dropdown.Item>
          </>
        )}

        <Dropdown.Item onClick={signOut} icon={<Icon icon="sign-out" />}>
          Çıkış Yap
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
