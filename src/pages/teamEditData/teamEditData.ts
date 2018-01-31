import { DatabaseService } from './../../app/teamdatabase.service';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { File } from '@ionic-native/file';

@Component({
    templateUrl: 'teamEditData.html',
    selector: 'team-edit'
})
/**
 * TODO: FIX DISMISS AND MAKE INPUTED DATA SAVE ON DISMISS
 */
export class TeamEdit implements OnInit {
    image: string;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    ngOnInit(): void {
        this.canvas = <HTMLCanvasElement>document.getElementById('editcnvs');
        this.ctx = this.canvas.getContext("2d");

    }
    name: any;
    constructor(private navParams: NavParams, private file: File,
        private viewCtrl: ViewController, private dbService: DatabaseService) {
        this.getName();
        this.canvas = <HTMLCanvasElement>document.getElementById('cnvs');
        this.ctx = this.canvas.getContext("2d");
    }

    ReturnName(): string {
        return this.navParams.get('name');
    }

    getName() {
        this.name = this.navParams.get('name');

    }





    SaveandDismiss(id: number, details: string) {
        var picture;
        var sdName = this.ReturnName();
        console.log(sdName, id, details)


        /*this.base64.encodeFile(dataUrl)
            .then((stringfile:string) => {
                console.log(stringfile);
                picture = stringfile;
            })*/

        var img = this.formattxt(id);
        // this.image = img;
        this.dbService.submitData(sdName, id, details, img);
        this.viewCtrl.dismiss();

    }


    formattxt(id: number): string {
        this.ctx.fillStyle = "#FFFFFF"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        var fontsize = 1000;
        this.ctx.font = "1000px Verdana";
        console.log(id, this.canvas.width, this.ctx.measureText(id.toString()));
        while (this.ctx.measureText(id.toString()).width > this.canvas.width) {
            fontsize--;
            this.ctx.font = fontsize + "px Verdana";

            //this.ctx.font= fontsize +"px Verdana"
        }

        console.log(fontsize);
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        console.log(this.ctx.textAlign, this.ctx.textBaseline);
        var gradient = this.ctx.createLinearGradient(0, 0, 200, 0);
        gradient.addColorStop(0, "magenta");
        gradient.addColorStop(.5, "blue");
        gradient.addColorStop(1, "red");
        this.ctx.fillStyle = gradient;


        this.ctx.fillText(id.toString(), 100, 100);

        var dataUrl = this.canvas.toDataURL();

        return dataUrl;
    }

}