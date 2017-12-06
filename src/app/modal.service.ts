import { TeamEdit } from './../pages/teamEditData/teamEditData';
import { teamDesc } from './teamdesc';
import { LoadingService } from './loading.service';
import { Team } from './Team';
import { DatabaseService } from './database.service';
import { NavParams, ModalController } from "ionic-angular";
import { TeamData } from "../pages/teamData/teamData";
import { Injectable } from "@angular/core";

@Injectable()
export class ModalService {
    teamDesc: teamDesc;
    team: Team ;
    pmodule;
    constructor(private modalCtrl: ModalController, private dbService: DatabaseService, private ldg: LoadingService) {



    }
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    viewEditModal(value: any): void {
        let promise = new Promise(() => {
            this.ldg.presentLoading('Loading...');
            
            this.sleep(1500).then(() => {
                let profileModal = this.modalCtrl.create(TeamEdit, {name : value});
                this.ldg.dismissLoading();
                profileModal.present();
            })
        })
    }

    viewTeamModal(value: any): void {
        let promise = new Promise(() => {
            this.ldg.presentLoading('Loading...');
            this.getData(value);
            this.sleep(1500).then(() => {
                console.log(this.team);
                let profileModal = this.modalCtrl.create(TeamData, { team: this.team, teamDesc: this.teamDesc})
                this.ldg.dismissLoading();
                profileModal.present();
                
                
            }
            )
        })
       
        
    }

    getData(id: number): void {
       
        this.dbService.getTeam(id).then((team) => this.team = team);
        this.dbService.getTeamInfo(id).then((teamDesc) => this.teamDesc = teamDesc);



    }


}