import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Chart2.css";

export default class Chart2 extends Component {
  state = {
    options: {
      dataLabels: {
        enabled: false
      },
      chart: {
        toolbar: {
          show: false
        }
      },
      colors: ["#426ff5", "#8a8a8a"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0,
          opacityTo: 0
        }
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 3
      },
      legend: {
        markers: {
          width: 18,
          height: 5,
          radius: 12
        },
        itemMargin: {
          horizontal: 6,
          vertical: 5
        },
        onItemClick: {
          toggleDataSeries: false
        },
        onItemHover: {
          highlightDataSeries: false
        }
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19",
          "2018-09-18",
          "2018-09-17",
          "2018-09-16",
          "2018-09-15",
          "2018-09-14",
          "2018-09-13"
        ]
      },
      yaxis: {
        opposite: true
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ]
  };

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="250"
        />
      </div>
    );
  }
}
