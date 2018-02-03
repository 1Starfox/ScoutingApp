import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'Charts',
  templateUrl: 'Charts.html'
})
export class ChartsPage implements OnInit {
  p: any;
   vari: any;
  ngOnInit(): void {

  var canvas =  <HTMLCanvasElement> document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  console.log('not here')
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [{
        label: 'apples',
        data: [12, 19, 3, 17, 6, 3, 7],
        backgroundColor: "rgba(153,255,51,0.6)"
      }, {
        label: 'oranges',
        data: [2, 29, 5, 5, 2, 3, 10],
        backgroundColor: "rgba(255,153,0,0.6)"
      }]
    }
  });

  myChart.update();
  ctx.font ="30px Verdana"
  ctx.fillText("Hello World",100,100)
}
  //console.log(myChart);
}
