import { Component, OnInit, ChangeDetectorRef, DoCheck, OnChanges } from '@angular/core';
import {NavService} from './nav.service'
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { ParentportalService } from '../parent-login/services/parentportal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, DoCheck, OnChanges {

  appTitle = 'Teacher Portal';
  // OR (either will work)
  visible: boolean
  loggedIn: boolean
  userType: string
  badgeContent: any[]
  hideMatBadge: boolean


  constructor(private nav: NavService, private auth: AuthService, private router: Router, private pps: ParentportalService) { }

  ngOnInit() {
    this.loggedIn = this.auth.isAuthenticated();
    this.badgeContent = this.pps.getConf();
    this.userType = this.auth.getType();
  }

  ngDoCheck() {
    this.loggedIn = this.auth.isAuthenticated();
    this.userType = this.auth.getType();

    if (this.userType == "Teacher") {
      if (this.badgeContent.length > 0) {
        this.hideMatBadge = false;
      } else { this.hideMatBadge = true; }
    }

  }
  ngOnChanges() {
    this.badgeContent = this.pps.getConf();
  }

  LogOut(){
    this.auth.Logout();
  }

  goToNotifs() {
    this.router.navigateByUrl('/notifs');
  }

}
