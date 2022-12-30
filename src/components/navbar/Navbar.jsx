import { Menu } from "antd";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div >
      <Menu className="navBar">
        <Menu.Item key="explore">Explore</Menu.Item>
        <Menu.Item key="features">Features</Menu.Item>
        <Menu.Item key="about">About Us</Menu.Item>
        <Menu.Item key="contact">Contact Us</Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
