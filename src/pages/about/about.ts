import { DatabaseService } from './../../app/teamdatabase.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File} from '@ionic-native/file'
import { LoadingService } from '../../app/loading.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers :[DatabaseService, LoadingService]
})
export class AboutPage implements OnInit {
  p: any;
   vari: any;
  ngOnInit(): void {
    /*this.ldg.presentLoading('Loading...');
    console.log(this.file.dataDirectory)
    this.file.checkDir('file:///sdcard/', 'Android').then(_ => console.log('Yep'));
    this.file.createDir('file:///sdcard/', 'test', true)
      .then(() => {
        this.file.createFile('file:///sdcard/test', 'test.txt', true)
        this.file.writeFile('file:///sdcard/test', 'test.txt','Hello World',{replace: true})
          .then(() => console.log('YES'))
          .catch((e)=>console.log(e));


      })
      .then(_ => {
        sleep(100)
        this.file.writeFile('file:///sdcard/test', 'db.txt',JSON.stringify(this.db.export()), {replace :true}).then(() => console.log("yepdedo"))

        this.file.writeFile('file:///sdcard/test', 'db.json',JSON.stringify(this.db.export()), {replace :true}).then(() => console.log("yepdedo"))
      })
    
     this.ldg.dismissLoading();*/
     this.canvas = <HTMLCanvasElement>document.getElementById('cnvs');
     this.ctx = this.canvas.getContext("2d");

  }

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  element: HTMLImageElement;

  canvastest() {
    this.ctx.fillStyle = "#FFFFFF"
    this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)
    // this.element = document.createElement("img");
    var text = "Avery";
     var fontsize = 300;
     this.ctx.font = "300px Verdana";
    this.fittext(text);
     var gradient = this.ctx.createLinearGradient(0,0,200, 0);
     gradient.addColorStop(0,"magenta");
     gradient.addColorStop(.5,"blue");
     gradient.addColorStop(1,"red");
     this.ctx.fillStyle = gradient;
     this.ctx.textAlign = "center";
     this.ctx.textBaseline = "middle";
     this.ctx.fillText(text,100,100);
    // this.element.src = dataUrl;
    // //document.getElementById("div").appendChild(this.element);


}

fittext(t){
  var fontsize = 300;
  while(this.ctx.measureText(t.toString()).width>this.canvas.width){
    fontsize--;
    this.ctx.font= fontsize +"px Verdana"
  }
}
  view() {
    
  
   var t = JSON.stringify(this.db.js);

    document.getElementById("value").innerHTML = t;
  }

  constructor(public navCtrl: NavController, private file: File, private ldg: LoadingService, private db: DatabaseService) {

  }
  

}
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
