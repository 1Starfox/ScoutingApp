import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class TeamWebSQL {
    constructor(storage: Storage) {
        if (storage.ready) {
            console.log(storage.driver)
        }


    }
}