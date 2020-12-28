import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { parentPortal } from './parent-login/loginthings/parentPortal';
import { ParentportalService } from './parent-login/services/parentportal.service';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';

// import * as express from 'express';
// const bodyParser = require('body-parser');
// import * as jwt from 'jsonwebtoken';
// import * as fs from "fs"; PROBLEM CODE


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Logined: boolean = false;
  parentUsers: any[];

  TestHeyo: boolean = false;

  FirstTimeSetUp() {
    console.log("Booting...");

    this.parentUsers = this.service.getAllParentData();
    console.log(this.parentUsers);
  
  }
  Login(user: string, password: string){
    console.log("Login is running");

    // this.parentPortalService.update(this.parentportal, this.key);
    console.log("Entered into the DB!!");
    
    console.log(this.parentUsers);
    for (var i = 0; i < this.parentUsers.length; ++i) {
      var pCurrentUser = this.parentUsers[i];

      if (user == pCurrentUser.Username && password == pCurrentUser.Password) {
        console.log('Putting into Session Storage');
        let key = "User"
        sessionStorage.setItem(key,pCurrentUser.key);
        var tester = sessionStorage.getItem("User");
        console.log(tester);
        sessionStorage.setItem('userType',pCurrentUser.userType);
        this.Logined = true;
        return;
      } else {
        console.log("No User Records Found.")
      }
    }
  
  
}
  Logout(){
    let key = "User";
    let key1 = "userType";
    sessionStorage.removeItem(key);
    sessionStorage.removeItem(key1);
    //sessionStorage.removeItem('UserType');
    // NEED TO USE IT FIRST, CREATE BUTTON IN NAV BAR
    this.Logined = false;
    console.log(this.Logined);
  }
  
  isAuthenticated() {
    var item = sessionStorage.getItem("User");
    // Do extra verification steps here
    if (item){
      this.Logined = true;
    } else {
      this.Logined = false;
    }
    return this.Logined;
  }


  getType() {
    var type = sessionStorage.getItem("userType");
    return type;
  }
  
  constructor(private service: ParentportalService) { }
}
