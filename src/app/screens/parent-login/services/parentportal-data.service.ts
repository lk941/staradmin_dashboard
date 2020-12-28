import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ParentPortal } from '../services/parentportal';

@Injectable({
  providedIn: 'root'
})
export class ParentportalDataService {

  private parentPortalSource = new BehaviorSubject({parentportal:null, key: ''});
  currentParentPortal = this.parentPortalSource.asObservable();

  constructor() { }

  changeParentPortal(parentportal: ParentPortal, key: string) {
    this.parentPortalSource.next({parentportal: parentportal, key: key});
  }
}
