import React, { Component } from "react";
import Chart from "react-apexcharts";

export class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {  
        series: [{
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21],
        }, {
          name: 'Striking Calf',
          data: [153, 132,133, 152, 113, 143, 132]
        }, {
          name: 'Tank Picture',
          data: [12, 17, 11, 9, 15, 11, 20]
        }, {
          name: 'Bucket Slope',
          data: [9, 7, 5, 8, 6, 9, 4]
        }],
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          dropShadow: {
            enabled: true,
            blur: 1,
            opacity: 0.25
          }
        },
        plotOptions: {
          bar: { 
            vertical: true,
            barHeight: '60%',
           
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
        },
        title: {
          text: 'Compare Sales Strategy'
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          type: 'pattern',
          opacity: 1,
          pattern: {
            style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings
          },
         
            colors: [function({ value, seriesIndex, w }) {
              
              if(value == 44) {
                  return '#7E36AF'
              } else if (value == 55) {
                  return '#164666'
              } else if(value == 41){
                  return '#D9534F'
              }
              else if(value == 37){
                return '#6A6E94'
              }
              else if(value == 22){
                return '#663F59'
              }
              else if(value == 43){
                return '#4E88B4'
              }
              else if(value == 21){
                return '#D9534F'
              }
              else if(value >= 100 || value <= 200) {
                return '#A9D794'
              }
            }],
          
        },
        dataLabels: {
          style: {
            colors: ['#F44336', '#E91E63', '#9C27B0']
          }
        },
        legend: {
          position: 'right',
          offsetY: 40
        }
        
      },
      
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.options.series}
        colors={this.state.colors}
        type="bar"
        width="500"
      />
    );
  }
}
