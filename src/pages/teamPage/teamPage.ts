import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from ''
import { DatabaseService } from '../../app/teamdatabase.service';
import { Team } from '../../app/Team';
import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { LoadingService } from '../../app/loading.service';
import { ModalService } from '../../app/modal.service';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { HTTP } from '@ionic-native/http';


@Component({
    selector: 'page-submit',
    templateUrl: 'teamPage.html',
    providers: [DatabaseService, LoadingService, ModalService, HTTP]

})




export class TeamPage implements OnInit {
    teams: Team[];
    ready: boolean = this.dbService.ready;

    public loading;
    html: string;
    test: string = 'Baby OOhhh';



    constructor(public navCtrl: NavController, private ldgController: LoadingController,
        private dbService: DatabaseService, private alertCtrl: AlertController,
        private ldService: LoadingService, private mdService: ModalService,
        private actionsheetctrl: ActionSheetController, private http: HTTP) {
        this.loading = ldgController;
    }

    recieveData(): void {
        window.setTimeout(500);
        this.test = " LOOK AT CONSOLE";
        this.dbService.getData().then(teams => this.teams = teams).then(() => console.log(this.teams[0]));
        console.log("recieved Teams");
        this.presentData();


    }
    ngOnInit(): void {
        //this.recieveData();
        this.ldService.presentLoading("IT WORKS");
        sleep(1000).then(() => {
            if (this.dbService.ready) {
                this.ldService.dismissLoading();
                this.recieveData();
                this.presentData();

                // this.canvastest();
            } else {
                this.ldService.dismissLoading();
                this.ngOnInit();
            }


        })




        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }



    }
    presentData() {
        //for(var i = 0; i< this.teams.length; i++){
        // this.html = `
        //     <ion-item class = "maroonred">          
        //         <button ion-button clear (click) =" showModal(`+ this.teams[0].teamid + `);" (press)="pressEvent($event,` + this.teams[0].teamid + `)" class = "maroonred">
        //             <ion-avatar item-start>
        //                 <img src="`+ this.teams[0].teamImg + `>
        //             </ion-avatar>
        //             {{team.teamName}}
        //         </button>
        //     </ion-item> `
        // // }
        // //this.html="<p>Hello World</p>"
        // this.html = '<ion-item class = "maroonred">  <button ion-button clear (click) =" showModal('+ this.teams[0].teamid + ');" (press)="pressEvent($event,' + this.teams[0].teamid + ')" class = "maroonred"><ion-avatar class="teamimg" item-start><img src="'+this.teams[0].teamImg+'"></ion-avatar>'+this.teams[0].teamName+'</button></ion-item>';
        // this.html += '<ion-item class = "maroonred">  <button ion-button clear (click) =" showModal('+ this.teams[1].teamid + ');" (press)="pressEvent($event,' + this.teams[1].teamid + ')" class = "maroonred"><ion-avatar class="teamimg" item-start><img src="'+this.teams[1].teamImg+'"></ion-avatar>'+this.teams[1].teamName+'</button></ion-item>';

        // console.log(this.html);
        // document.getElementById("il").innerHTML = this.html;
    }

    pressEvent(e, f) {
        console.log(e)
        console.log(f)
        this.presentActionSheet(f)
    }

    presentActionSheet(teamid) {
        let actionSheet = this.actionsheetctrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'View Team',
                    role: 'View Specific Team',
                    handler: () => {
                        this.mdService.viewTeamModal(teamid);
                    }
                }, {
                    text: 'Sync',
                    handler: () => {
                        this.dbService.getTeam(teamid)
                            .then(steam => this.Syncteam(steam))
                        //console.log(this.teams[0])
                        //this.Syncteam(this.teams[0]);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    Syncteam(value: any) {
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')
        this.http.setDataSerializer('json');
        this.http.post('http://192.168.0.109:8080/mobile', value, headers)
            .then(data => {
                console.log(data.data)
                if (data.data == 'Sorry Sucka') {
                    this.showAlert('YESS');
                }
            })
            .catch(error => {
                console.log('**', error.error);

            })
    }

    submitData(name: string): void {
        /* var result;
         console.log(JSON.stringify(this.dbService.getData()));
     
         this.showAlert(name);
     
         name = name.trim();
     
         if (name.length > 0) {
     
             this.ldService.presentLoading("starting");
             this.dbService.submitData(name
             ).then((resolve) => {
                 result = resolve; 
                 if(result.rowsAffected == 1) {
                     this.ldService.dismissLoading();
                     this.showAlert(name)
                     console.log("LV: "+result.insertId);
                 } else {
                     this.ldService.dismissLoading()
                     this.showAlert('Did Not Submit')
                     console.log(result);
                 }      
             } )
             
     
            
     
             
     
         } else {
     
             this.showAlert('Did Not Submit');
     
         }*/

        this.mdService.viewEditModal(name);

    }


    showModal(value: any): void {
        this.mdService.viewTeamModal(value);
        /*this.dbService.getTeam(value).then((result) => {
            console.log(result);
        });*/
    }

    showAlert(name: string) {

        let alert = this.alertCtrl.create({

            title: 'Complete',

            subTitle: name,

            buttons: ['OK', 'Cancel']

        });

        alert.present();


    }
}