import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Score } from './score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private dbpath = 'PCRAssessmentScore';

  scoreRef: AngularFireList<Score> = null;

  constructor(private db : AngularFireDatabase) { 
    this.scoreRef = db.list(this.dbpath);
  }

  getScoreList():AngularFireList<Score>{
    return this.scoreRef
  }
}
