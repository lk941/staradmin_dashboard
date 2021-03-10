import { Component, OnInit, ChangeDetectorRef, DoCheck, OnChanges } from "@angular/core";
import {SideBarService} from './sidebar.service'
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { ParentportalService } from 'src/app/screens/parent-login/services/parentportal.service';
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  providers: [NgbDropdownConfig]
})
export class SidebarComponent implements OnInit, DoCheck, OnChanges {

  appTitle = 'Teacher Portal';
  // OR (either will work)
  visible: boolean
  loggedIn: boolean
  userType: string
  badgeContent: any[]
  hideMatBadge: boolean

  constructor(private sidenav: SideBarService, private auth: AuthService, private router: Router, private pps: ParentportalService) {}

  ngOnInit() {

    this.loggedIn = this.auth.isAuthenticated();
    if (this.auth.isAuthenticated()) {
      this.sidenav.show();
    }
    this.badgeContent = this.pps.getConf();
    this.userType = this.auth.getType();
    const body = document.querySelector("body");

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll(".sidebar .nav-item").forEach(function(el) {
      el.addEventListener("mouseover", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
    
  }

  ngDoCheck() {
    this.loggedIn = this.auth.isAuthenticated();
    console.log(this.auth.isAuthenticated);
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

  public parentId = "";
  clickedMenu(event) {
    var target = event.currentTarget;
    let parentId = target.id;
    if (parentId == this.parentId) {
      console.log('same');
      this.parentId = "";
    } else {
      console.log('not same');
      this.parentId = target.id;
    }
  }

  LogOut(){
    this.auth.Logout();
  }

  goToNotifs() {
    this.router.navigateByUrl('/notifs');
  }

}
