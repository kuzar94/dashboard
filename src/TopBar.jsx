import React, { Component } from "react";
import "./TopBar.css";
import Glass from "./assets/glass.svg";
import Ring from "./assets/ring.svg";
import UserPhoto from "./assets/userPhoto.svg";
import Menu from "./assets/menu.svg";

export default class TopBar extends Component {
  render() {
    return (
      <div className="topBarDiv">
        <div className="leftTopBarPart">
          <button className="menuButton">
            <img src={Menu} alt="Menu" />
          </button>
        </div>
        <div className="rightTopBarPart">
          <button className="glassButton">
            <img src={Glass} alt="Glass" />
          </button>
          <button className="ringButton">
            <img src={Ring} alt="Ring" />
          </button>
          <div className="aboutUser">
            <p className="nameUser">Janusz Kowalski</p>
            <p className="statusUser">Active</p>
          </div>
          <button className="userButton">
            <img src={UserPhoto} alt="UserPhoto" />
          </button>
        </div>
      </div>
    );
  }
}
