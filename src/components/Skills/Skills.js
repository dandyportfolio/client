import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import '../css/Skills.min.css';
import dataSets from './dataSets.json';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import '../../plugins/debug.addIndicators';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };

    this.options = {
      legend: {
        labels: {
          boxWidth: 0,
          fontColor: 'white',
          fontSize: 25,
        },
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: 'white',
              fontSize: 18,
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
            ticks: {
              fontColor: 'white',
              fontSize: 18,
            },
          },
        ],
      },
    };
  }

  grabJsonData() {
    this.setState({
      data: dataSets,
    });
  }

  componentDidMount() {
    console.log('Component mounted successfully');
    this.grabJsonData();
    //! START ANIMATION
    const tl = new TimelineMax({ onUpdate: updatePercentage });
    const controller = new ScrollMagic.Controller();

    tl.from('.background-skills-text', 2, { x: 500 });

    //? Scroll Magic START
    const scene = new ScrollMagic.Scene({
      triggerElement: '.skills-container',
    })
      .setTween(tl)
      .addTo(controller);
    //? Scroll Magic END

    function updatePercentage() {
      tl.progress();
    }
  }

  render() {
    return (
      <div id="skills" className="skills-container">
        <div className="skills-graph-container">
          {this.state.data.map(skill => (
            <div className="charts-container" key={skill.id}>
              <HorizontalBar
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
                      barThickness: 20,
                    },
                  ],
                }}
                options={this.options}
              />
            </div>
          ))}
        </div>
        <h1 className="background-skills-text">SKILLS</h1>
      </div>
    );
  }
}

export default Skills;
