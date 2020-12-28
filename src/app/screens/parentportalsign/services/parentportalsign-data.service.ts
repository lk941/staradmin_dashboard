import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ParentPortalSign } from './parentportalsign';

@Injectable({
  providedIn: 'root'
})
export class ParentportalsignDataService {

  private parentPortalSignSource = new BehaviorSubject({parentportalsign:null, key: ''});
  currentParentPortalSign = this.parentPortalSignSource.asObservable();

  constructor() { }

  changeParentPortalSign(parentportalsign: ParentPortalSign, key: string) {
    this.parentPortalSignSource.next({parentportalsign: parentportalsign, key: ''})
  }
}
