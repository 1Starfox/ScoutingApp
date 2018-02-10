import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',

})

export class HomePage {

    constructor(public menuCtrl: MenuController) {
        menuCtrl.enable(true)
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




}
