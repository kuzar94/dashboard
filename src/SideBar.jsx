import React, { Component } from "react";
import "./SideBar.css";

export default class SideBar extends Component {
  render() {
    return (
      <div className="sideBarDiv">
        <div className="homeIcon" />
        <div className="starIcon" />
        <div className="rectangleIcon" />
        <div className="fileIcon" />
        <div className="personIcon" />
      </div>
    );
  }
}
