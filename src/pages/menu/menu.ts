import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TeamPage } from '../teamPage/teamPage';

@Component({
  templateUrl: 'menu.html'
})
export class MenuPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = TeamPage;

  constructor(public menuCtrl: MenuController) {
      menuCtrl.enable(true)
  }

  openMenu() {
      this.menuCtrl.open();
  }

  closeMenu() {
      this.menuCtrl.close();
  }

  toggleMenu() {
      this.menuCtrl.toggle('hello');
  }


}
