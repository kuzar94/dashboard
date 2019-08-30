import React, { Component } from "react";
import "./TopBar.css";

export default class TopBar extends Component {
  render() {
    return (
      <div className="topBarDiv">
        <div className="burgerIcon" />
        <div className="rightData">
          <div className="searchIcon" />
          <div className="notificationIcon" />
          <div className="aboutUser">
            <p className="nameUser">Janusz Kowalski</p>
            <p className="statusUser">Active</p>
          </div>
          <div className="userIcon" />
        </div>
      </div>
    );
  }
}
