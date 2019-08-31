import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Chart2.css";

export default class Chart2 extends Component {
  componentDidMount() {
    let y = [];
    Object.keys(this.props.chart2Data).forEach(key => {
      y.push({
        name: this.props.chart2Data[key]["name:"],
        data: this.props.chart2Data[key].data.map(values => {
          return values.value;
        })
      });
    });
    this.setState({ series: y });
  }
  state = {
    options: {
      dataLabels: {
        enabled: false
      },
      chart: {
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ["#8a8a8a", "#426ff5"],
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
        offsetX: -300,
        offsetY: 0,
        fontSize: "13px",
        fontFamily: "Manjari, Arial, sans-serif",
        markers: {
          width: 20,
          height: 5,
          radius: 12
        },
        itemMargin: {
          horizontal: 5,
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
        categories: Object.values(this.props.chart2Data[0].data).map(values => {
          return values.date;
        }),
        labels: {
          format: "yyyy",
          style: {
            colors: "rgb(177, 171, 171)",
            fontSize: "12px",
            fontFamily: "Manjari, Arial, sans-serif",
            cssClass: "apexcharts-yaxis-label"
          }
        },
        axisTicks: {
          show: true
        },
        tickPlacement: "on"
      },
      yaxis: {
        opposite: true,
        labels: {
          formatter: function(value) {
            return "$" + value / 1000 + "k";
          },
          style: {
            color: "rgb(177, 171, 171)",
            fontSize: "14px",
            fontFamily: "Manjari, Arial, sans-serif",
            cssClass: "apexcharts-yaxis-label"
          }
        }
      }
    },
    series: []
  };

  render() {
    return (
      <div className="chart2Div">
        <div className="selectDiv">
          <select>
            <option value="allTime">All time</option>
          </select>
        </div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="230"
        />
      </div>
    );
  }
}
