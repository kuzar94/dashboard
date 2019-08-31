import React, { Component } from "react";
import "./Chart1.css";

export default class Chart1 extends Component {
  render() {
    function getWidthProgressBar(percentage) {
      return {
        width: `${percentage * 100}%`
      };
    }
    const data = this.props.chart1Data;
    let variableForCss = 0;
    return (
      <div className="chart1Div">
        <div className="price">
          <h3>{data.price}</h3>
          <h5>€</h5>
        </div>
        <p>Perfomance</p>
        <h4>+ {data.performance}%</h4>
        <button>Buy now</button>
        <div className="perfomanceBars">
          {Object.keys(data.performance_year).map(key => {
            variableForCss++;
            return (
              <div key={key}>
                <div className="progressABout">
                  <p>Perfomance {key}</p>
                </div>
                <div className="progressBar" key={key}>
                  <div
                    className={`fillBar${variableForCss}`}
                    style={getWidthProgressBar(data.performance_year[`${key}`])}
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
