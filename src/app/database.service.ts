import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Team } from './Team';

@Injectable()
export class DatabaseService {

    private result: boolean;
    private db: SQLiteObject;
    constructor(private sqlPorter: SQLitePorter, private sqlite: SQLite ) {
        this.sqlite = new SQLite();
        this.sqlite.create({
            name: 'customer.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            this.db = db;
        
            
            var sql = 'create table IF NOT EXISTS team (teamid INTEGER PRIMARY KEY AUTOINCREMENT, teamName VARCHAR(255), teamNum int NOT NULL )';
            console.log('Created 1st SQL Statement:'+ sql );
            var sql2 = 'create table IF NOT EXISTS desc (descid INTEGER NOT NULL PRIMARY KEY, desc VARCHAR(255), teamid INTEGER, FOREIGN KEY (teamid) REFERENCES team(teamid))';
            console.log('Created 1st SQL Statement:'+ sql2 );
            
            db.executeSql(sql, {})
                .then(() => console.log('Executed 1st SQL Statement'))
                .then(() => db.executeSql(sql2, {})
                                .then(() => console.log('Executed 2nd Statement'))
                                .then(() => this.submitData('Brandon'))
                                .catch((e)=> console.log(e)))

                .catch(e => console.log(e));
            
        })
            .catch(e => console.log(e));
            
    }


    /* constructor(private sqlite: SQLite, private RealDB: SQLiteObject) {
         this.sqlite.create({
             name: 'data.db',
             location: 'default'
         })
         .then(RealDB => {
             
             
                 RealDB.executeSql('create table customer(id  INTEGER  VARCHAR(32))', {})
                   .then(() => console.log('Executed SQL'))
                   .catch(e => console.log(e));
             
             
               })
               .catch(e => console.log(e));
         
     }*/

    submitData(name: string): void {
        /*  this.dbObject.executeSql('INSERT INTO customer(name) VALUES(' + name + ') ', {})
              .then(() => console.log('Executed SQL'))
              .catch(e => console.log(e));*/


        var sql = "Insert into team (teamName, teamNum) VALUES ('"+name+"',23)";
        this.db.executeSql(sql, {})
            .then(() => this.result = true)
            .then(() => console.log("executed sql" + sql))
            .then(() => this.view())
            .catch(e => console.log('fail: '+ JSON.stringify(e)));

        /* this.sqlPorter.importJsonToDb(this.dbObject, name)
             .then(() => { this.result = true})
             .catch(e => console.log(e));*/
        


    }/*
    viewAll(): void {
        var r;
        var names = [];
        var sql = 'select * from customer';
        this.db.executeSql(sql, {})
            .then((result) => {
                r = JSON.stringify(result);
                if (result.rows.length > 0) {
                    console.log(result.rows.item(0));

                }
                for (var i = 0; i < result.rows.length; i++) {
                    console.log('RESULT: '+ i + result.rows.item(i).name);
                    names.push(result.rows.item(i).name);
                }
                console.log(result.rows.item(0).name);
                console.log('Rows' + result.rows.length);
            })
            console.log(names); 
            console.log('final: ' + Promise.resolve(this.sqlPorter.exportDbToJson(this.db)).then(function(value) {
                console.log(value);
            }));

            
        } */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    view(): void {
        var sql = 'SELECT * from team';
        
        this.db.executeSql(sql, {})
            .then((result) => {
                console.log(JSON.stringify(result));
                if(result.rows.length > 0){
                    console.log(result.rows.item(0).teamName + result.rows.item(0).teamNum);
                }
                this.getData();
            })
    }

    getData(): void {
         this.sqlPorter.exportDbToJson(this.db)
            .then(response => console.log(JSON.stringify(response.data.inserts.team)))
            .catch(this.handleError);



    }





}

