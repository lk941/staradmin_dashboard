import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ParentPortalSign } from './parentportalsign';

@Injectable({
  providedIn: 'root'
})
export class ParentportalsignService {

  constructor(private db: AngularFireDatabase) { }

  parentList: AngularFireList<any>;

  insert (ParentPortalSign:ParentPortalSign) {
    this.db.list('ParentUser').push(ParentPortalSign)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update (parentportalsign:ParentPortalSign, key: string) {
    this.db.list('ParentUser').update(key, parentportalsign)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getParent() {
    this.parentList = this.db.list('ParentUser');
    return this.parentList.snapshotChanges();
  }
  
}
