// import { Component, OnInit } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit, ChangeDetectorRef, DoCheck, OnChanges } from "@angular/core";
import { NavBarService } from './navbar.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { ParentportalService } from 'src/app/screens/parent-login/services/parentportal.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit, DoCheck, OnChanges {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  appTitle = 'Teacher Portal';
  // OR (either will work)
  visible: boolean
  loggedIn: boolean
  userType: string
  badgeContent: any[]
  hideMatBadge: boolean

  toggleRightSidebar() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  toggleIconOnlySidebar() {
    this.iconOnlyToggled = !this.iconOnlyToggled;
    if (this.iconOnlyToggled) {
      document.querySelector("body").classList.add("sidebar-icon-only");
    } else {
      document.querySelector("body").classList.remove("sidebar-icon-only");
    }
  }

  constructor(config: NgbDropdownConfig, private navbar: NavBarService, private auth: AuthService, private router: Router, private pps: ParentportalService) {
    config.placement = "bottom-right";
  }
  ngOnInit() {
    this.loggedIn = this.auth.isAuthenticated(); 
    this.badgeContent = this.pps.getConf();
    this.userType = this.auth.getType();
    if (this.auth.isAuthenticated()) {
      this.navbar.show();
    }


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
