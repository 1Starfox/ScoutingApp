import { DatabaseService } from './../../app/teamdatabase.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})



export class StatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseService) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

 

}
