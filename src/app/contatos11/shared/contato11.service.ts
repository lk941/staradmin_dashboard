import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import * as firebase from 'angularfire2';
//import * as firebase from '@angular/fire'
import * as firebase from 'firebase/app';
import { Contato11 } from './contato11';
import { map } from 'rxjs/operators';
import { Http ,HttpModule} from '@angular/http';
import { FirebaseApp } from 'angularfire2';
import { StringifyOptions } from 'querystring';

 
@Injectable({
  providedIn: 'root'
})
export class ContatoService11 {
 
  constructor(private db: AngularFireDatabase) { }
  LearningStyleList :AngularFireList<any>;
  parentList :AngularFireList<any>;
  // databaseURL = "https://mimibot-6c7f4.firebaseio.com";

  insert(contato11: Contato11) {
    this.db.list('LearningStyle').push(contato11)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(contato1: Contato11, key: string) {
    this.db.list('LearningStyle').update(key, contato1)
      .catch((error: any) => {
        console.error(error);
      });
  }
/*
  update1(Jeriel: string){
    var ref = firebase.database().ref('LearningStyle');
    ref.once("value", function(snapshot) {
      snapshot.forEach(function (learningstyle) {
        const lstyle = learningstyle.child('Jeriel').val();

        if (Jeriel = lstyle){
          learningstyle.ref.update({ BullyType: bullyType });
        }
      });
    });
  }
*/
  getAll() {
    return this.db.list('LearningStyle')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {}}));
        })
      );
  }

  getLearningStyle(){
    this.LearningStyleList = this.db.list('LearningStyle');
    return this.LearningStyleList.snapshotChanges();
  }

  getChildyById(key: string){
    return this.db.object('LearningStyle/' + key).valueChanges();
  }

  getParent() {
    this.parentList = this.db.list('ParentUser');
    return this.parentList.snapshotChanges();
  }
}