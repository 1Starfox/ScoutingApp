import { TeamWebSQL } from './../../../app/teamwebsql.module.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from ''
import { Team } from '../../../app/Team';
import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { LoadingService } from '../../../app/loading.service';
import { ModalService } from '../../../app/modal.service';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { HTTP } from '@ionic-native/http';


@Component({
    selector: 'page-submit-browser',
    templateUrl: 'BrowserteamPage.html',
    providers: [TeamWebSQL, LoadingService, ModalService, HTTP]

})




export class BrowserTeamPage implements OnInit {
    ngOnInit() {
        
    }
    constructor(private tws: TeamWebSQL) {}
}