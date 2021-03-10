import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contato11 } from './contato11';
 
@Injectable({
  providedIn: 'root'
})
export class ContatoDataService {
  private contatoSource = new BehaviorSubject({ contato11: null, key: '' });
  currentContato = this.contatoSource.asObservable();
 
  constructor() { }
 
  changeContato(contato11: Contato11, key: string) {
    this.contatoSource.next({ contato11: contato11, key: key });
  }
}