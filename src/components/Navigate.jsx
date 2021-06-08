import React from "react";
import { Button, Menu } from "semantic-ui-react";

const Navigate = () => {
  return (
    <div>
      <Menu color={"violet"} inverted size="large">
        <span style={{ color: "white", fontSize: 19, marginTop: "0.8em", marginLeft: "10px" }}>
          HRMS
        </span>
        <Menu.Menu position="right">
          <Menu.Item name="İş İlanları" />
          <Menu.Item name="İşverenler" />
          <Menu.Item>
            <Button white>Üye ol</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navigate;
