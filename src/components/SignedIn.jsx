import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Icon } from "rsuite";

export default function SignedIn({ signOut }) {
  let checkImage = false;

  const { userItem } = useSelector((state) => state.user);

  return (
    <div style={{ position: "relative", right: 100, marginTop: -10 }}>
      <Dropdown
        noCaret
        icon={
          checkImage ? (
            <Avatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
          ) : (
            <Avatar
              src="https://404.error"
              alt={
                userItem[0].userType === "jobSeeker"
                  ? userItem[0].user.firstName.slice(0, 2)
                  : userItem[0].userType === "employer"
                  ? userItem[0].user.companyName.slice(0, 2)
                  : userItem[0].user.firstName.slice(0, 2)
              }
            />
          )
        }
      >
        {userItem[0].userType === "employer" ? (
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
        ) : userItem[0].userType === "jobSeeker" ? (
          <>
            <Link to={"/bilgilerim"}>
              <Dropdown.Item icon={<Icon icon="info" />}>
                Bilgilerim
              </Dropdown.Item>
            </Link>
            <Dropdown.Item icon={<Icon icon="info" />}>
              Başvurularım
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Link to={"/personel-bilgilerim"}>
              <Dropdown.Item icon={<Icon icon="user" />}>
                Personel Bilgilerim
              </Dropdown.Item>
            </Link>
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
