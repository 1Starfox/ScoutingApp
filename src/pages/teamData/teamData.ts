import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Team } from '../../app/Team';

@Component({

    templateUrl: 'teamData.html',
    selector: 'team-data'
})

export class TeamData {
    values: Team;
    constructor(public navParams: NavParams) {
        console.log('UserId', navParams.get('team'));
        this.values= navParams.get('team');
    }




}
