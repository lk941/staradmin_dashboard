import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service';
import { ParentPortal } from '../parent-login/services/parentportal';
import { ParentportalService } from '../parent-login/services/parentportal.service';
import { ParentportalDataService } from '../parent-login/services/parentportal-data.service';
import { Observable, of } from 'rxjs';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';

declare function btnSignUpClicked([]): string;


@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.scss']
})

export class ParentLoginComponent implements OnInit {
  parentportal: ParentPortal;
  key: string="";
  success=false;
  parentPortalArray = []; //returns nothing
  parentUsers = []; //returns users

  
  ngOnInit() {
    //this.nav.show();
    this.parentportal = new ParentPortal();


    this.parentPortalDataService.currentParentPortal.subscribe(data => {
      if (data.parentportal && data.key) {
        this.parentportal = new ParentPortal();
        this.parentportal.Username = data.parentportal.Username;
        this.parentportal.Password = data.parentportal.Password;
        this.parentportal.key = data.key;
        console.log(data.key);
      }
    })
  
    this.parentPortalService.getParent().subscribe(list => {
      this.parentUsers = list.map(item => {
        return {
          ...item.payload.val()
        }
      })
    })
  
    this.AuthService.FirstTimeSetUp();
  console.log(this.parentUsers);
  }

parentUsername: string;

  onSubmitLogIn() {
    console.log("Login is running");
    //stop if form is wrong
    
    console.log("Login Step 2 is running");
    
    this.AuthService.Login(this.parentportal.Username, this.parentportal.Password);
    if (this.AuthService.isAuthenticated() == true)
    {
      this.router.navigateByUrl('phome');
    } else {
      return;
    }
    
  }

  // public hashPwd() {
  //   btnSignUpClicked(this.parentPortalArray);
  // }
  constructor(private router: Router, private parentPortalService: ParentportalService, private parentPortalDataService: ParentportalDataService, private AuthService: AuthService, private nav: NavService) {}
  
}