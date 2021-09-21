import React, { Component } from "react";
import Chart from "react-apexcharts";

export class StackedChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          {
            name: 'Actual',
            data: [
              {
                x: '2011',
                y: 13.5,
                goals: [
                  {
                    name: 'Expected',
                    value: 14,
                    strokeWidth: 5,
                    strokeColor: '#775DD0'
                  }
                ]
              },
               ]
          }
        ],
        options: {
          chart: {
            height: 35,
            type: 'bar'
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          colors: ['#00E396'],
          dataLabels: {
            formatter: function(val, opt) {
              const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                  .goals
          
              if (goals && goals.length) {
                return `${val} `
              }
              return val
            }
          },
          legend: {
            show: true,
            showForSingleSeries: true,
            //customLegendItems: ['Actual', 'Expected'],
            markers: {
              fillColors: ['#00E396', '#775DD0']
            }
          }
        },
      
      
      };
    }

  

    render() {
        return (
            <Chart
              options={this.state.options}
              series={this.state.series}
            
              type="bar"
              width="500"
              height = "100"
            />
          );
        }
      }

    
    
