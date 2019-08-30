import React, { Component } from "react";
import "./ChartPanel.css";
import * as data from "./fund_json.json";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import Chart5 from "./Chart5";

export default class ChartPanel extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="chartPanelDiv">
        <div className="firstRow">
          <div className="chart1">
            <Chart1 chart1Data={data.fund} />
          </div>
          <div className="chart2">
            <Chart2 chart2Data={data.funds} />
          </div>
          <div className="chart3">
            <Chart3 />
          </div>
        </div>
        <div className="secondRow">
          <div className="chart4">
            <Chart4 />
          </div>
          <div className="chart5">
            <Chart5 />
          </div>
        </div>
      </div>
    );
  }
}
