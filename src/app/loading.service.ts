import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
    constructor(public ldgController: LoadingController){
         
    }

    
    
    public loading;
    
    presentLoading(text: string): void {
        this.loading = this.ldgController.create
        ({
            content: text
        });
        this.loading.present();       

        
    }

    dismissLoading(): void {
        
        this.loading.dismiss();
    }
}