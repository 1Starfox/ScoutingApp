import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from ''
import { DatabaseService } from '../../app/database.service';
import { Team } from '../../app/Team';
import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { LoadingService } from '../../app/loading.service';
import { ModalService } from '../../app/modal.service';

@Component({
    selector: 'page-submit',
    templateUrl: 'teamPage.html',
    providers: [DatabaseService,LoadingService, ModalService]

})




export class TeamPage implements OnInit {
    teams: Team[];
    ready: boolean = this.dbService.ready;

    public loading;

    test: string = 'Baby OOhhh';

   

    constructor(public navCtrl: NavController, private ldgController: LoadingController,
         private dbService: DatabaseService, private alertCtrl: AlertController, private ldService: LoadingService, private mdService: ModalService) 
         {
             this.loading = ldgController;
          }

    recieveData(): void {
        window.setTimeout(500);
        this.test = " LOOK AT CONSOLE";
        this.dbService.getData().then(teams => this.teams = teams).then(() => console.log(this.teams[0]));
        console.log("recieved Teams");
        
        
    }
    ngOnInit(): void {
        //this.recieveData();
        this.ldService.presentLoading("IT WORKS");
        sleep(1000).then(() => {
            if(this.dbService.ready){
            this.ldService.dismissLoading();
            this.recieveData();
            } else {
                this.ldService.dismissLoading();
                this.ngOnInit();
            }

        })

        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }


        }


    
        submitData(name: string): void {
            var result;
            console.log(JSON.stringify(this.dbService.getData()));
    
            this.showAlert(name);
    
            name = name.trim();
    
            if (name.length > 0) {
    
                this.ldService.presentLoading("starting");
                this.dbService.submitData(name).then((resolve) => {
                    result = resolve;       
                } )
    
                if(result) {
                    this.ldService.dismissLoading();
                    this.showAlert('Submited');
                    
                } else {
                    this.ldService.dismissLoading()
                    this.showAlert('Did Not Submit')
                    console.log(result);
                }
    
                
    
            } else {
    
                this.showAlert('Did Not Submit');
    
            }
        }

        
    showModal(value: any) : void {
        this.mdService.presentModal(value);
       /*this.dbService.getTeam(value).then((result) => {
           console.log(result);
       });*/
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