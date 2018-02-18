import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'charts-page',
  templateUrl: 'Charts.html'
})
export class ChartsPage implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController) {}

  showChart() {
  var x = document.getElementById("TeamWins");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  console.log('hidden or shown')
  }

  p: any;
  vari: any;
  ngOnInit(): void {



  var canvas =  <HTMLCanvasElement> document.getElementById("apples");
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
      }, {
        label: 'Zacks',
        data: [3,15,2,5,6,1,4],
        backgroundColor: 'rgba(250, 100, 0,0,5)'
      }]
    }
  });
  var canvas =  <HTMLCanvasElement> document.getElementById("vegetables");
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
      }, {
        label: 'Zacks',
        data: [3,15,2,5,6,1,4],
        backgroundColor: 'rgba(250, 100, 0,0,5)'
      }]
    }
  });
  var canvas =  <HTMLCanvasElement> document.getElementById("fruit");
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
      }, {
        label: 'Zacks',
        data: [3,15,2,5,6,1,4],
        backgroundColor: 'rgba(250, 100, 0,0,5)'
      }]
    }
  });
  var canvas =  <HTMLCanvasElement> document.getElementById("oranges");
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
      }, {
        label: 'Zacks',
        data: [3,15,2,5,6,1,4],
        backgroundColor: 'rgba(250, 100, 0,0,5)'
      }]
    }
  });

  myChart.update();

  ctx.font ="30px Verdana"
  ctx.fillText("Hello World",100,100)






}

 mainSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Settings',
     buttons: [
       {
         text: 'Change Charts Shown',
         handler: () => {
           this.changeChartsShownSheet();
           console.log('did it work');
         }
       },
       {
         text: 'Change Teams Shown',
         handler: () => {
          // presentActionSheet();
           console.log('Change Teams');
         }
       },
       {
         text: 'Exit',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }
 changeChartsShownSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Change Charts Shown',
       buttons:[{
         text: 'Team Full Data',
         handler:() => {

           console.log('not ready yet');
         }
       }]
     })
     actionSheet.present();
   }
}
//Will be replaced with actual teams, this is just test data
