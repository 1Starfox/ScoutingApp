import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from ''
import { DatabaseService } from '../../app/database.service';
import { Customer } from '../../app/customer';
import { AlertController } from 'ionic-angular';
@Component({
    selector: 'page-submit',
    templateUrl: 'submitdata.html',
    providers: [DatabaseService]

})




export class SubmitPage {
    customers: Customer[];
    test: string = 'dsdsd';
    
    
    


    constructor(public navCtrl: NavController, private dbService: DatabaseService, private alertCtrl: AlertController) { }
    

    
    submitData(name: string): void {
        console.log(JSON.stringify(this.dbService.getData()));
        this.showAlert(name);
        name = name.trim();
        if (name.length > 0) {
            var newname: string = `{"customers": [{ "name":"`+name+`"}]} `;
            this.showAlert("starting");
            var json = JSON.parse(newname);
/*
            this.dbService.submitData(name);
            this.showAlert('Submited');

            */
            if(this.dbService.submitData(name)){
            this.showAlert("Added" +JSON.stringify(json));
            
            
            
            } else {
                this.showAlert('Did Not Submit After Reading');
                
            }
        } else {

            this.showAlert('Did Not Submit');
            


        
    }
}

showAlert(name: string) {
    let alert = this.alertCtrl.create({
        title: 'Added New Customer',
        subTitle: 'You added ' + name,
        buttons: ['OK']
    });
    alert.present();
    
}
}