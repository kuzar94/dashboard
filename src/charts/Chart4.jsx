import React, { Component } from "react";
import "./Chart4.css";

export default class Chart4 extends Component {
  state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

  render() {
    function getWidthProgressBar(percentage) {
      return {
        width: `${percentage}%`
      };
    }
    return (
      <div className="chart4Div">
        <h2>Funds rating</h2>
        <div className="perfomanceBars">
          {Object.keys(this.props.chart4Data).map(key => {
            return (
              <div key={key}>
                <div className="progressAbout">
                  <div className="progressTitle">Rating {key}</div>
                  <div className="progressPercentage">
                    {this.props.chart4Data[`${key}`]}%
                  </div>
                </div>
                <div className="progressBar" key={key}>
                  <div
                    className="fillBar"
                    style={getWidthProgressBar(this.props.chart4Data[`${key}`])}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
