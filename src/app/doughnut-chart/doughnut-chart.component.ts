import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  public chart: any;
  data: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = [240, 100, 432, 253, 342];
    const total = data.reduce((a, b) => a + b, 0);
    const percentageData = data.map(value => ((value / total) * 100).toFixed(2));
    const label = ['Python', 'C++', 'JavaScript', 'Angular', 'NodeJS'];
    const backgroundColors = ['red', 'green', 'lime', 'orange', 'blue'];
    const textColors = backgroundColors; 
    const labelsWithPercentage = label.map((label, index) => ({
      label: `${label} (${percentageData[index]}%)`,
     // backgroundColor: backgroundColors[index], // Set the background color here
      color: textColors[index],
    }));
    this.data = labelsWithPercentage;
   
    Chart.register(percentageCenterPlugin);

    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: label,
        datasets: [{
          label: 'My First Dataset',
          data: data,
          backgroundColor: backgroundColors,
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          tooltip: {
            enabled: false,
          }
        }
      }
    });
  }
}

const percentageCenterPlugin = {
  id: 'percentageCenterPlugin',
  beforeDraw: function(chart: { width: any; height: any; ctx: any; }) {
    const width = chart.width;
    const height = chart.height;
    const ctx = chart.ctx;
    const text = '100%'; // Customize your center text here
    const fontSize = 24; // Customize the font size
    const transparency = 0.5; // Customize the transparency here (0 to 1)

    ctx.restore();

    // Set the text color with transparency
    ctx.fillStyle = `rgba(0, 0, 0, ${transparency})`; // Black text with transparency
    ctx.font = fontSize + 'px Verdana, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerX = width / 2;
    const centerY = height / 2;

    ctx.fillText(text, centerX + 10, centerY + 20);
    
    ctx.save();
  },
};

