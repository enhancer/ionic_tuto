import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';


import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME : string = 'db.db';

@Component({
    selector: 'page-sqlite',
    templateUrl: 'sqlite.html'
  })
  export class SQlitePage {

    private db : SQLiteObject;

        constructor (public navCtrl:NavController , private sqlite : SQLite){
            this.createDatabaseFile();
         

        }

        private createDatabaseFile():void {
            this.sqlite.create({
                name: DATABASE_FILE_NAME,
                location:'default',
            })
            .then((db: SQLiteObject)=> {
                console.log('Bdd crée');
                this.db = db;
                this.createTable();
            })

            .catch(e => console.log(e));
        }

        private createTable():void{
            this.db.executeSql('CREATE TABLE IF NOT EXISTS `MOVIES` ( `idMovies` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT, `eval` INTEGER, `desc` TEXT, `categoryId` INTEGER )', {})
            .then(() => { 
                        console.log('table movie crée'))
                        db.executeSql('CREATE TABLE IF NOT EXISTS `Categories` ( `idCategorie` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL )', {})
                        .then(() => console.log('table category crée'))
                        .catch(e => console.log(e));}
            .catch(e => console.log(e));
        }
}