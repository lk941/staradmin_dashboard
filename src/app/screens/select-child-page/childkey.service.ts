import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Childkeyparent} from './childkeyparent';
import { Child } from '../child-model/child';
import { ParentportalService } from '../parent-login/services/parentportal.service';

@Injectable({
  providedIn: 'root'
})
export class ChildkeyService {

  constructor(private db: AngularFireDatabase, private p: ParentportalService) { }
  
  geteverythingChild(): Array<any>{

    //Return the Parent Key is the GOAL
  var ref = this.db.database.ref("User");
  var userList= Array<Childkeyparent>();
  console.log(ref); //Gives a promise
  console.log(ref.toString()); // shows the mimibot firebase url

  // ref.on('value', this.gotData, this.errData); // This works... But how does it work?
  
  // this.gotData(ref); //Testing...

  ref.once('value',
  function(snapshot){
    var hank = (snapshot.val());
    // Wake up Lieutenant, It's me, Connor
    var keys = Object.keys(hank);
    console.log(Object(hank));  

    for (var i = 0; i < keys.length; i++){
      var k = keys[i];
      var username = hank[k].Name; // CHILD NAME ###
      var pid = hank[k].pid;
      var nric = hank[k].NRIC;
      console.log(k + " " + username+ " " + pid + " " + nric); // WORKS
      
      var connor: any = [];
      connor.key = k;
      connor.name = username;
      connor.pid = pid;
      connor.nric = nric;
      userList.push(connor);
      // It's me, Connor. I'm the cyborg sent by Cyberlife to investigate Deviants.
    }
    
  });
  return userList;
  // Help 
  
  
  }

  setPID(key: string, pid: string){
    this.db.database.ref("User/"+ key + "/pid").set(pid);
  }

  getStudent() {
    var ref = this.db.database.ref("User");
    var userList = Array<Child>();

    ref.once('value',
      function (snapshot) {
        var hank = (snapshot.val());
        // Wake up Lieutenant, It's me, Connor
        var keys = Object.keys(hank);
        console.log(Object(hank));

        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var username = hank[k].Name; // CHILD NAME ###
          try { var nric = hank[k].nric; } catch { console.log("No NRIC"); }
          console.log(k + " " + username + " "); // WORKS



          var connor = new Child();
          connor.key = k;
          connor.Name = username;
          connor.nric = nric; 

          userList.push(connor);
          // It's me, Connor. I'm the cyborg sent by Cyberlife to investigate Deviants.
        }

      });
    return userList;

  }


  insert(child: Child) {
    this.db.list('User').push(child)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  getChildhere() {
    var ref = this.db.database.ref('User');

    ref.once('value',
      function (snapshot) {
        var left = (snapshot.val());
        var keys = Object.keys(left);

        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var username = left[k].Name; // CHILD NAME ###
          var sensitiveinfo = left[k].NRIC;

        }

      });
   

  }

  setConfirmation(key: string, pid: string) {
    var input: any = [];
    input.pid = pid;
    input.uid = key;
    this.db.database.ref("ParentChildConfirm").push(input)
      .then((result: any) => {
        console.log(result.key);
      })
  }

  checkConfirmation(key: string, parentid: string): boolean {
    var huh: boolean = true;

    this.db.database.ref("ParentChildConfirm").orderByValue().once('value', function (snapshot) {
      var hank = (snapshot.val)();
      var keys = Object.keys(hank);

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var pid = hank[k].pid;
        var uid = hank[k].uid;

        if (parentid == pid && key == uid) {
          huh = false;
        } 
      }
    });
    return huh;

  }
}
