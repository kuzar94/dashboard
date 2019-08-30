import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import "./App.css";
import ChartPanel from "./ChartPanel";

function App() {
  return (
    <div className="appDiv">
      <TopBar />
      <SideBar />
      <ChartPanel />
    </div>
  );
}

export default App;
