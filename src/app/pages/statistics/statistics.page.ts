import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  @ViewChild('estadist', {static: true}) estadist: ElementRef;
  @ViewChild('estadistN', {static: true}) estadistN: ElementRef;

  private estadistChart: Chart;
  private estadistNChart: Chart;
  constructor() { }

  ngOnInit() {

    this.estadistChart = new Chart(this.estadist.nativeElement, { 
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'Alta',
            fill: true,
            lineTension: 0.1,
            borderColor: 'rgba(255, 0, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(126, 0, 0, 1)',
            pointBackgroundColor: '#FF8181',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(126, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(126, 0, 0, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [10, 20, 40, 40, 50, 60, 70, 80, 10, 100],
            spanGaps: false
          }
        ]
      }
    });

    this.estadistNChart = new Chart(this.estadistN.nativeElement, { 
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'Normal',
            fill: true,
            lineTension: 0.1,
            borderColor: 'rgba(51, 204, 51, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(33, 131, 33, 1)',
            pointBackgroundColor: '#228A22',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(33, 131, 33, 1)',
            pointHoverBorderColor: 'rgba(33, 131, 33, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [10, 20, 40, 40, 50, 60, 70, 80, 10, 100],
            spanGaps: false
          }
        ]
      }
    });
  }

}
