import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  public reservation_bar_chart: any;
  public reservation_doughnut_chart: any;
  public profit_doughnut_chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.reservation_bar_chart = new Chart("reservation-bar-chart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec'], 
	       datasets: [
          {
            label: "Futplay",
            data: ['25','35', '46', '40', '67',
								 '29', '33', '65', '88', '98', '28', '59'],
            backgroundColor: '#FC14FF'
          },
          {
            label: "Regulares",
            data: ['23','31', '50', '23', '43',
								 '20', '15', '45', '60', '87', '85', '49'],
            backgroundColor: '#C8C8C8'
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
    this.reservation_doughnut_chart = new Chart("reservation-doughnut-chart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Reservaciones regulares', 'Reservaciones Futplay'],
	       datasets: [
          {
            data: [20, 6],
            backgroundColor: ['#C8C8C8','#AA1FFF'],
          },
        ]
      },
      options: {
        aspectRatio: 3
      }
    });
    this.profit_doughnut_chart = new Chart("profit-doughnut-chart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Reservaciones regulares', 'Reservaciones Futplay'],
	       datasets: [
          {
            data: [300, 90],
            backgroundColor: ['#C8C8C8','#AA1FFF'],
          },
        ]
      },
      options: {
        aspectRatio: 3
      }
    });
  }
}
