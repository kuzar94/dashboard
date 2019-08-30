import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Chart1.css";

export default class Chart1 extends Component {
  render() {
    const data = this.props.chart1Data;
    return (
      <div className="chart1Div">
        <h3>{data.price}</h3>
        <p>Perfomance</p>
        <h4>{data.performance}</h4>
        <button>Buy now</button>
        <p>Perfomance</p>
        {data.performance_year["2019"]}
        <p>Perfomance</p>
        {data.performance_year["2018"]}
      </div>
    );
  }
}
