import { Component, OnInit ,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  barChart: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['HTML', 'CSS', 'Angular', 'Django REST API', 'Python', 'java','C++'],
        datasets: [{
          label: '# skill',
          data: [80, 80, 60, 40, 50, 50,70],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Percentage'
            },
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 100
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'known language'
            },
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 100
            }
          }]
        }
      }
    });
  }

}
