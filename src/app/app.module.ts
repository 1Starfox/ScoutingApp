import { StatsPage } from './../pages/stats/stats';
import { TeamData } from './../pages/teamData/teamData';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseService } from './teamdatabase.service';
import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { LoadingService } from './loading.service';
import { TeamPage } from '../pages/teamPage/teamPage';
import {ChartsPage } from '../pages/Charts/Charts';
import { ModalService } from './modal.service';
import { TeamEdit } from '../pages/teamEditData/teamEditData';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TeamPage,
    TeamEdit,
    TeamData,
    ChartsPage,
    StatsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TeamPage,
    TeamData,
    TeamEdit,
    ChartsPage,
    StatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatabaseService,
    SQLite,
    SQLitePorter,
    File,
    LoadingService,
    ModalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
