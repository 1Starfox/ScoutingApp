import { DatabaseService } from './../../app/teamdatabase.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File} from '@ionic-native/file'
import { LoadingService } from '../../app/loading.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers :[DatabaseService, LoadingService]
})
export class AboutPage implements OnInit {
  p: any;
   vari: any;
  ngOnInit(): void {
    /*this.ldg.presentLoading('Loading...');
    console.log(this.file.dataDirectory)
    this.file.checkDir('file:///sdcard/', 'Android').then(_ => console.log('Yep'));
    this.file.createDir('file:///sdcard/', 'test', true)
      .then(() => {
        this.file.createFile('file:///sdcard/test', 'test.txt', true)
        this.file.writeFile('file:///sdcard/test', 'test.txt','Hello World',{replace: true})
          .then(() => console.log('YES'))
          .catch((e)=>console.log(e));


      })
      .then(_ => {
        sleep(100)
        this.file.writeFile('file:///sdcard/test', 'db.txt',JSON.stringify(this.db.export()), {replace :true}).then(() => console.log("yepdedo"))

        this.file.writeFile('file:///sdcard/test', 'db.json',JSON.stringify(this.db.export()), {replace :true}).then(() => console.log("yepdedo"))
      })
    
     this.ldg.dismissLoading();*/

  }
a
  view() {
    
  
   var t = JSON.stringify(this.db.js);

    document.getElementById("value").innerHTML = t;
  }

  constructor(public navCtrl: NavController, private file: File, private ldg: LoadingService, private db: DatabaseService) {

  }
  

}
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
