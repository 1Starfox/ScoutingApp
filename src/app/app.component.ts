import { StatsPage } from './../pages/stats/stats';
import { TeamPage } from './../pages/teamPage/teamPage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home'
import { AboutPage } from '../pages/about/about'
import {ChartsPage } from '../pages/Charts/Charts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  homePage = HomePage;
  aboutPage = AboutPage;
  teamPage= TeamPage;
  statsPage = StatsPage;
  chartPage = ChartsPage;

  constructor(platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen, private menuctrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      splashScreen.hide();
      statusBar.hide();
      platform.platforms();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
  closeMenu() {
    this.menuctrl.close();
  }
}
