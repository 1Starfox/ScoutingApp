import { DatabaseService } from './../../app/teamdatabase.service';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Base64 } from '@ionic-native/base64'
import { File } from '@ionic-native/file';
@Component({
    templateUrl: 'teamEditData.html',
    selector: 'team-edit',
    providers: [Base64]
})
/**
 * TODO: FIX DISMISS AND MAKE INPUTED DATA SAVE ON DISMISS
 */
export class TeamEdit implements OnInit {
    ngOnInit(): void {
        this.canvas = <HTMLCanvasElement>document.getElementById('cnvs');
        this.ctx = this.canvas.getContext("2d");
    }
    name: any;
    constructor(private navParams: NavParams, private file: File,
         private viewCtrl: ViewController, private dbService: DatabaseService,
        private base64: Base64) {
        this.getName();
    }

    ReturnName(): string {
        return this.navParams.get('name');
    }

    getName() {
        this.name = this.navParams.get('name');

    }
         
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

    SaveandDismiss(id: number, details: string) {
        var picture;
        var sdName = this.ReturnName();
        console.log(sdName, id, details)
        //console.log(base64.encode(text2png(id.toString(), { textColor: 'blue' })))
        
        var fontsize = 300;
        this.ctx.font = "300px Verdana";
        while(this.ctx.measureText(id.toString()).width>this.canvas.width){
          fontsize--;
          this.ctx.font= fontsize +"px Verdana"
        }
        var gradient = this.ctx.createLinearGradient(0,0,200, 0);
        gradient.addColorStop(0,"magenta");
        gradient.addColorStop(.5,"blue");
        gradient.addColorStop(1,"red");
        this.ctx.fillStyle = gradient;
        this.ctx.textAlign = "center";
        var txtsize = this.ctx.measureText("5002").width;
        this.ctx.textBaseline = "middle";
    
        this.ctx.fillText(id.toString(),100,100);
    
        var dataUrl = this.canvas.toDataURL();
        /*this.base64.encodeFile(dataUrl)
            .then((stringfile:string) => {
                console.log(stringfile);
                picture = stringfile;
            })*/

  
        this.dbService.submitData(sdName, id, details, dataUrl);
        this.viewCtrl.dismiss();
    }
    
       
    
    
    }