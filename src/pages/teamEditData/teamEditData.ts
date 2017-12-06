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
    constructor(navParams: NavParams, private viewCtrl: ViewController){
        
        this.name=navParams.get('name');
    }

    SaveandDismiss(id:number, details:string) {
        let data = {id,details};
        this.viewCtrl.dismiss(data);
    }
}