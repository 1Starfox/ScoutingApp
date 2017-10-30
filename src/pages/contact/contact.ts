import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title = 'title';
  constructor(public navCtrl: NavController) {
    
  }

}
export class Name {
  name: string;
}