import { DatabaseService } from './../../app/teamdatabase.service';
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
    templateUrl: 'teamEditData.html',
    selector: 'team-edit'
})
/**
 * TODO: FIX DISMISS AND MAKE INPUTED DATA SAVE ON DISMISS
 */
export class TeamEdit {
    name: any;
    constructor(private navParams: NavParams, private viewCtrl: ViewController, private dbService: DatabaseService){
        this.getName();
    }

    ReturnName(): string {
        return this.navParams.get('name');
    }

    getName(){
        this.name=this.navParams.get('name');
        
    }

    SaveandDismiss(id:number, details:string) {
        var sdName =this.ReturnName();
        console.log(sdName,id,details)
        this.dbService.submitData(sdName,id,details);
        this.viewCtrl.dismiss();
    }
}