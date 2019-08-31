import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Chart3.css";

export default class Chart3 extends Component {
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
            size: "70%"
          }
        }
      }
    },
    series: [this.props.chart3Data.percent]
  };

  render() {
    return (
      <div className="chart3Div">
        <div className="estimate">
          <div className="estimateTitle">Estimate profit</div>
          <div className="estimateValue">
            {"$" + this.props.chart3Data.value / 1000 + "K"}
          </div>
        </div>
        <div className="chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height="240"
          />
        </div>
        <p className="chartSubtitle">Funds profit</p>
        <p className="chartText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          assumenda?
        </p>
      </div>
    );
  }
}
