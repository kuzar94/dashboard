import React, { Component } from "react";
import "./SideBar.css";
import Home from "./assets/home.svg";
import User from "./assets/user.svg";
import Star from "./assets/star.svg";
import Rectangle from "./assets/rectangle.svg";
import File from "./assets/file.svg";

export default class SideBar extends Component {
  render() {
    return (
      <div className="sideBarDiv">
        <button className="homeButton">
          <img src={Home} alt="Home" />
        </button>
        <button className="starButton">
          <img src={Star} alt="Star" />
        </button>
        <button className="rectangleButton">
          <img src={Rectangle} alt="Rectangle" />
        </button>
        <button className="fileButton">
          <img src={File} alt="File" />
        </button>
        <button className="userButton">
          <img src={User} alt="User" />
        </button>
      </div>
    );
  }
}
