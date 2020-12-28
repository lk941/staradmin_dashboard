import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ParentPortal } from '../services/parentportal';
import { map } from 'rxjs/operators';
import { Notif } from '../../teachnotif/notif'

@Injectable({
  providedIn: 'root'
})
export class ParentportalService {

  constructor(private db: AngularFireDatabase) { }
  parentUser :AngularFireList<any>;

  insert (parentportal:ParentPortal) {
    this.db.list('ParentUser').push(parentportal)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update (parentportal:ParentPortal, key: string) {
    this.db.list('ParentUser').update(key, parentportal)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('ParentUser')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`ParentUser/${key}`).remove();
  }

  getParent(){
    this.parentUser = this.db.list('ParentUser');
    return this.parentUser.snapshotChanges();
  }

  getAllParentData(): Array<any>{

    //Return the Parent Key is the GOAL
  var ref = this.db.database.ref("ParentUser");
  var userList= Array<ParentPortal>();
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
      var username = hank[k].Username;
      var password = hank[k].Password;
      var userType = hank[k].userType;
      console.log(k + " " + username+ " " + password); // WORKS
      
      var connor = new ParentPortal();
      connor.key = k;
      connor.Username = username;
      connor.Password = password;
      connor.userType = userType;
      userList.push(connor);
      // It's me, Connor. I'm the cyborg sent by Cyberlife to investigate Deviants.
    }
    
  },
  this.errData);
  return userList;
  // Help 
  
  
  }

  errData(err){
    console.log("ERROR");
    console.log(err);
  }

  getConf() {
    var ref = this.db.database.ref("ParentChildConfirm");
    var confList = Array<Notif>();

    ref.once('value',
      function (snapshot) {
        var hank = (snapshot.val());
        // Wake up Lieutenant, It's me, Connor
        var keys = Object.keys(hank);

        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var uid = hank[k].uid;
          var pid = hank[k].pid;
          console.log(k + " " + uid + " " + pid); // WORKS

          var connor = new Notif;
          connor.key = k;
          connor.uid = uid;
          connor.pid = pid;
          
          if (uid != null) {
            confList.push(connor);
          }
          // It's me, Connor. I'm the cyborg sent by Cyberlife to investigate Deviants.
        }
      })

    // THEN GET NAMES
    console.log(confList);
    
    console.log(confList.length); // Returns 0 [Doesn't Evaluate immediately.]
    
    for (var i = 0; i < confList.length; i++) {

      // Getting based from pid.
     


      // Getting based from uid.

     
    }

    console.log(confList);
    return confList;

  }

  getCName(uid : string) {
    var ref1 = this.db.database.ref("User");
    ref1.once('value', function (snapshot) {
      var thought = (snapshot.val());
      var keyed = Object.keys(thought);

      for (var i = 0; i < keyed.length; i++) {
        var k = keyed[i];
        var name = thought[k].Name; // TEMPORARY FIX BEFORE PUTTING NAME BACK

        if (uid == k) {
          console.log(name);
          return name;
        }

      }


    })
  }

  getPName(pid: string) {
    var ref2 = this.db.database.ref("ParentUser");
    ref2.once('value',
      function (snapshot) {
        var hank = (snapshot.val());
        // Wake up Lieutenant, It's me, Connor
        var keys = Object.keys(hank);

        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          var name = hank[k].Username; // TEMPORARY FIX 
          console.log(k);

          if (pid == k) {
            console.log(name);
            return name;
          }

        }
      })
  }

  deleteConf(key: string) {
    this.db.object(`ParentChildConfirm/${key}`).remove();
  }


  acceptConf(key: string) {
    this.db.object(`ParentChildConfirm/${key}`).remove();
  }
}
