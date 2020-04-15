import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './Skills.css';
import dataSets from './dataSets.json';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };

    this.options = {
      // maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              min: 0,
              max: 10,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: 'rgba(255,99,132,0.2)',
            },
          },
        ],
      },
    };
  }

  grabJsonData() {
    console.log('Component mounted successfully');
    this.setState({
      data: dataSets,
    });
  }

  componentDidMount() {
    this.grabJsonData();
  }

  render() {
    return (
      <div className="container">
        {this.state.data.map((skill) => (
          <div className="charts-container">
            <HorizontalBar
              className="inside"
              key={skill.id}
              data={{
                labels: skill.software,
                datasets: [
                  {
                    label: skill.label,
                    data: skill.data,
                    backgroundColor: [
                      '#3cffe7',
                      '#ff8c69',
                      '#3cffe7',
                      '#ff8c69',
                      '#3cffe7',
                      '#ff8c69',
                    ],
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 0,
                    barThickness: 40,
                  },
                ],
              }}
              options={this.options}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;