import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  public chart: any;
  data: any;
  currentCanvasId: string = 'MyChart';
  @ViewChild('dynamicCanvas') dynamicCanvas!: ElementRef;
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    // Initialize the canvas with a default ID
    this.dynamicCanvas.nativeElement.id = this.currentCanvasId;
    this.createChart();
  }
 
  
  create(canvasId: string) {
    debugger;
    if (this.chart) {
      this.chart.destroy();
    }

    this.currentCanvasId = canvasId;
    this.dynamicCanvas.nativeElement.id = canvasId;
    if (canvasId === 'MyChart') {
      this.createChart();
    } else if (canvasId === 'MyChart2') {
      this.DemoChart2();
    } else if (canvasId === 'MyChart3') {
      this.DemoChart3();
    }
  }

  createChart() {
    debugger
    const data = [240, 100, 432, 253, 342];
    const total = data.reduce((a, b) => a + b, 0);
    const percentageData = data.map(value => ((value / total) * 100).toFixed(2));
    const label = ['Python', 'C++', 'JavaScript', 'Angular', 'NodeJS'];
    const backgroundColors = ['red', 'yellow', 'lime', 'orange', 'blue'];
    const textColors = backgroundColors;
    const labelsWithPercentage = label.map((label, index) => ({
      label: `${label} (${percentageData[index]}%)`,
      color: textColors[index],
    }));
    this.data = labelsWithPercentage;

    Chart.register(percentageCenterPlugin);

    this.chart = new Chart(this.currentCanvasId, {
      type: 'doughnut',
      data: {
       labels: labelsWithPercentage.map(item => item.label), // Us,
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
          },
         
          legend: {
            title: {
              display: true,
              text: 'Courses',
              font:{
                weight:'bold',
                size:20
              },
              padding: {
                top: 10,
                bottom: 20
            },
          },
            display: true,
            position: 'left',
            labels: {
              usePointStyle: true,
              font :{
                weight:"bold",
                size:18
              }
            },
          },
        },
        animation: {
          animateScale: true,  // Enable scaling animation
          animateRotate: true, // Enable rotation animation
          duration: 1000,      // Animation duration in milliseconds
          easing: 'easeOutQuart', // Easing function for the animation
        }
      }
    });
  }
  //Second
  record:any;
  DemoChart2() {
    debugger
    const data = [240, 100, 432];
    const total = data.reduce((a, b) => a + b, 0);
    const percentageData = data.map(value => ((value / total) * 100).toFixed(2));
    const label = ['Apple', 'Kiwi', 'Orange'];
    const backgroundColors = ['red', 'orange', 'lime'];
    const textColors = backgroundColors;
    const labelsWithPercentage = label.map((label, index) => ({
      label: `${label} (${percentageData[index]}%)`,
      color: textColors[index],
    }));
    this.data = labelsWithPercentage;

    Chart.register(percentageCenterPlugin);

    this.chart = new Chart(this.currentCanvasId, {
      type: 'doughnut',
      data: {
       labels: labelsWithPercentage.map(item => item.label), // Us,
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
          },
          
          legend: {
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Fruits',
              font:{
                weight:'bold',
                size:20
              },
              padding: {
                top: 10,
                bottom: 20
            },
          },
            labels: {
              usePointStyle: true,
              font :{
                weight:"bold",
                size:18
              }
            }
          },
        },
        animation: {
          animateScale: true,  // Enable scaling animation
          animateRotate: true, // Enable rotation animation
          duration: 1000,      // Animation duration in milliseconds
          easing: 'easeOutQuart', // Easing function for the animation
        }
      }
    });
  }
  DemoChart3() {
    debugger
    const data = [140, 200, 442];
    const total = data.reduce((a, b) => a + b, 0);
    const percentageData = data.map(value => ((value / total) * 100).toFixed(2));
    const label = ['Maths', 'Physics', 'Chemistry'];
    const backgroundColors = ['red', 'orange', 'lime'];
    const textColors = backgroundColors;
    const labelsWithPercentage = label.map((label, index) => ({
      label: `${label} (${percentageData[index]}%)`,
      color: textColors[index],
    }));
    this.data = labelsWithPercentage;

    Chart.register(percentageCenterPlugin);

    this.chart = new Chart(this.currentCanvasId, {
      type: 'doughnut',
      data: {
       labels: labelsWithPercentage.map(item => item.label), // Us,
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
          },
          
          legend: {
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Subjects',
              font:{
                weight:'bold',
                size:20
              },
              padding: {
                top: 10,
                bottom: 20
            },
          },
            labels: {
              usePointStyle: true,
              font :{
                weight:"bold",
                size:18
              }
            }
          },
        },
        animation: {
          animateScale: true,  // Enable scaling animation
          animateRotate: true, // Enable rotation animation
          duration: 1000,      // Animation duration in milliseconds
          easing: 'easeOutQuart', // Easing function for the animation
        }
      }
    });
  }
}




const percentageCenterPlugin = {
  id: 'percentageCenterPlugin',
  beforeDraw: function (chart: { width: any; height: any; ctx: any; }) {
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

    ctx.fillText(text, centerX +110 , centerY + 5);

    ctx.save();
  },
};
