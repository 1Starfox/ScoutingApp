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

     scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
        document.documentElement.scrollTop = 0;
    }

    //  window.onscroll = function() {scrollFunction()};

  }
