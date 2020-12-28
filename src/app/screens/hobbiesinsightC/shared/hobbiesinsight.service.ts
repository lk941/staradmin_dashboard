import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Hobbiesinsight } from './hobbiesinsight';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HobbiesinsightService {
wordList: any[];
childName = "";
test: AngularFireList<any>;
hobbyList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase,private http: HttpClient) {
    
  }

  getHobbyByUserID(key:string){
    return this.db.list('Hobbies/'+key).valueChanges();
  }

  getChildName(key:string){
    return this.db.object('User/'+key).snapshotChanges();
  }

  //need to get child ID by parent id(pid)

  getChildByPID(key:string){

    return this.db.list('User', ref => ref.orderByChild('pid').equalTo(key)).snapshotChanges();
 
  }

  getAllHobby(){
    this.hobbyList = this.db.list('Hobbies');
    return this.hobbyList.snapshotChanges();
  }

  getAll(){
    this.test = this.db.list('Hobbies')
    return this.test.snapshotChanges()
  }

  getUserType(key:string){
    return this.db.object('ParentUser/' + key).snapshotChanges();
  }

  //insert into database after analyze
  updateHobbyLikeness(Name:string,Hobby:string,Duration:string,Reason:string,Enjoyment:string){
    var ref = firebase.database().ref('Hobbies');
    ref.orderByChild('Reason').equalTo(Reason).once("value",function(snapshot){
      snapshot.forEach(function(hobby){
        const dbName = hobby.child('Name').val();
        const dbReason = hobby.child('Reason').val();

        if(Reason == dbReason  && Name == dbName){
          hobby.ref.update({Enjoyment:Enjoyment})
        }
      })
    })
  }

  getBrain(){
    return this.http.get('../../assets/SemBrain/brain.json')
  }

  
  gethobbyData(){


    var hobbyData = [];

    const enjoyData = [
      "I like it",
      "I love spend time on it",
      "I spend hrs on it",
      "I feel is interesting",
      "I like to explore more on it",
      "I enjoy it",
      "because it is fun",
      "because l can with my friends",
      "chilling",
      "It is fun and l can join competitions",
      "I love to compete",
      "I like to explore more",
    ]

    const averageData = [
      "I just learn",
      "I follow my friends",
      "Play for fun",
      "I feel so so",
      "I only follow what my friend is doing",
      "Because l can play with my friends",  
      "I like to play with my friends",  
      "play in water",   
      "Cause it help me destress",
      "I can learn something",
      "I follow trend",
      "Cause it waste time",
    ]

    for (let i in enjoyData) {
      const text = enjoyData[i];
      var text1 = "high";
      hobbyData.push({ input: text, text1 , output: "Enjoy"});
    }


    for (let i in enjoyData) {
      const text = enjoyData[i];
      var text1 = "low";
      hobbyData.push({ input: text, text1 , output: "Average"});
    }

    for (let i in averageData) {
      const text = averageData[i];
      var text1 = "high";
      hobbyData.push({ input: text, text1 ,  output: "Enjoy"});
    }
   
    for (let i in averageData) {
      const text = averageData[i];
      var text1 = "low";
      hobbyData.push({ input: text, text1 , output: "Average"});
    }
   

    return hobbyData
  }
}
//console.log (HobbiesInsightComponent)