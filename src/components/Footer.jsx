import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        alignItems: "center",
        fontSize: 14,
        backgroundColor: "#282c35",
        width: "100%",
        textAlign: "center",
        padding: 15,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
      }}
    >
      <p style={{ color: "white" }}>
        Develop by Doğukan Karasansar 2021 © HRMS SİSTEMİ
      </p>
    </div>
  );
};

export default Footer;
