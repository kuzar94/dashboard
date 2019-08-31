import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Chart5.css";

export default class Chart5 extends Component {
  state = {
    options: {
      stroke: {
        lineCap: "round"
      },
      plotOptions: {
        radialBar: {
          startAngle: -180,
          endAngle: 180,
          track: {
            startAngle: -180,
            endAngle: 180
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: "#8a8a8a",
              fontSize: "3em",
              show: true
            }
          },
          hollow: {
            size: "70%",
            image: "../assets/aaa.jpg",
            imageWidth: 300,
            imageHeight: 300,
            imageOffsetX: 0,
            imageOffsetY: 0,
            imageClipped: true
          }
        }
      }
    }
  };
  render() {
    const data = this.props.chart5Data;
    return (
      <div className="chart5Div">
        <div className="chart5About">
          <div className="chart5AboutTitle">Personal data</div>
          <div className="chart5AboutSelectDiv">
            <select>
              <option value="allTime">All time</option>
            </select>
          </div>
        </div>
        <div className="charts5">
          <div className="chart5_1">
            <Chart
              options={this.state.options}
              series={[data.raise.value]}
              type="radialBar"
              height="240"
            />
            <label>Funds raise</label>
          </div>
          <div className="chart5_2">
            <Chart
              options={this.state.options}
              series={[data.estimated_profit]}
              type="radialBar"
              height="240"
            />
            <label>Estimate profit</label>
          </div>
          <div className="chart5_3">
            <Chart
              options={this.state.options}
              series={[data.mutual_funds]}
              type="radialBar"
              height="240"
            />
            <label>Mutual funds</label>
          </div>
        </div>
      </div>
    );
  }
}
