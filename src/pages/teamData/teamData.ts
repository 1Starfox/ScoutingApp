import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Team } from '../../app/Team';
import { teamDesc } from '../../app/teamdesc';

@Component({

    templateUrl: 'teamData.html',
    selector: 'team-data'
})

export class TeamData {
    desc: teamDesc;
    values: Team;
    constructor(public navParams: NavParams) {
        console.log('UserId', navParams.get('team'));
        console.log('data', navParams.get('teamDesc'));
        this.values= navParams.get('team');
        this.desc = navParams.get('teamDesc');
        
    }




}
