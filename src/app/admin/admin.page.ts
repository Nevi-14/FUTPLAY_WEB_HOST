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
        aspectRatio: 2.5,
        responsive: true,
      }
    });
    this.reservation_doughnut_chart = new Chart("reservation-doughnut-chart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
	       datasets: [
          {
            data: [20, 6],
            backgroundColor: ['#C8C8C8','#AA1FFF'],
          },
        ]
      },
      options: {
        aspectRatio: 1,
        cutout: "80%", 
        responsive: true
      },
      plugins: [{
        id: 'text',
        beforeDraw: function(chart, a, b) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
          ctx.restore();
          var fontSize = (height / 75).toFixed(2);
          ctx.font = "bold " + fontSize + "em Roboto, sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#3A1176";
    
          var text = "26",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }]
    });
    this.profit_doughnut_chart = new Chart("profit-doughnut-chart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {// values on X-Axis
	       datasets: [
          {
            data: [300, 90],
            backgroundColor: ['#C8C8C8','#AA1FFF'],
          },
        ]
      },
      options: {
        aspectRatio: 1,
        cutout: "80%", 
        responsive: true,
      },
      plugins: [{
        id: 'text',
        beforeDraw: function(chart, a, b) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
          ctx.restore();
          var fontSize = (height / 75).toFixed(2);
          ctx.font = "bold " + fontSize + "em Roboto";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#3A1176";
    
          var text = "390k",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }]
    });
  }
}
