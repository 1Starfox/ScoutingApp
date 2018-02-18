import { Component, ViewChild, NgZone } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { MenuController, Content } from 'ionic-angular';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',

})

export class HomePage {
  @ViewChild(Content) content: Content;

    constructor(public menuCtrl: MenuController, public zone: NgZone) {
        menuCtrl.enable(true)
      }
      public scrollAmount = 0;
      scrollHandler(event) {
   console.log(`ScrollEvent: ${event}`)
   console.log('scrollAmount');
   this.zone.run(()=>{
     // since scrollAmount is data-binded,
     // the update needs to happen in zone
     this.scrollAmount++
   })
 }

    //
    // openMenu() {
    //     this.menuCtrl.open();
    // }
    //
    // closeMenu() {
    //     this.menuCtrl.close();
    // }
    //
    // toggleMenu() {
    //     this.menuCtrl.toggle('hello');
    // }

    scrollToTop() {
     this.content.scrollToTop();
   }



  }
