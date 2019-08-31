import React, { Component } from "react";
import "./ChartPanel.css";
import * as data from "./data/fund_json.json";
import Chart1 from "./charts/Chart1";
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3";
import Chart4 from "./charts/Chart4";
import Chart5 from "./charts/Chart5";

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
            <Chart3 chart3Data={data.fund.estimated_profit} />
          </div>
        </div>
        <div className="secondRow">
          <div className="chart4">
            <Chart4 chart4Data={data.fund.ratings} />
          </div>
          <div className="chart5">
            <Chart5 chart5Data={data.personal_info} />
          </div>
        </div>
      </div>
    );
  }
}
