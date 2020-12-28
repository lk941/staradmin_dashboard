// if you dont understand the codes, neither do i
// https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example

import { Component, OnInit } from '@angular/core';
import { ParentportalsignService } from './services/parentportalsign.service';
import { ParentportalsignDataService } from './services/parentportalsign-data.service';
import { NavService } from '../nav/nav.service';
import { ParentPortalSign } from './services/parentportalsign';

declare function btnSignUpClicked([]): string;

@Component({
  selector: 'app-parentportalsign',
  templateUrl: './parentportalsign.component.html',
  styleUrls: ['./parentportalsign.component.scss']
})
export class ParentportalsignComponent implements OnInit {

  parentPortalSign: ParentPortalSign;
  key: string="";
  success=false;
  parentUserArray = [];

  constructor(private parentPortalSignService: ParentportalsignService, private parentPortalSignDataService: ParentportalsignDataService, private nav: NavService) { }

  ngOnInit() {
    //this.nav.show();

    // this.registerForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    //   confirmPassword: ['', Validators.required]
    // }, {
    //   validator: MustMatch('password', 'confirmPassword')
    // })

    // get entire parentuser from FB
    this.parentPortalSignService.getParent().subscribe(list => {
      this.parentUserArray = list.map(item => {
        return {
          ...item.payload.val()
        }
      })
    })

    this.parentPortalSign = new ParentPortalSign();
    this.parentPortalSignDataService.currentParentPortalSign.subscribe(data => {
      if (data.parentportalsign && data.key) {
        this.parentPortalSign = new ParentPortalSign();
        this.parentPortalSign.Email = data.parentportalsign.Email;
        this.parentPortalSign.PhoneNo = data.parentportalsign.PhoneNo;
        this.parentPortalSign.Password = data.parentportalsign.Password;
        var role = "Parent";
        role = data.parentportalsign.Role;
        this.key = data.key;
      }
    }) 
  }

  // get f() {
  //   return this.registerForm.controls;
  // }

  onSubmitSignUp() {
    // this.submitted = true;
    // if (this.registerForm.invalid) {
    //   return;
    // } else {
      if (this.key) {
        this.parentPortalSignService.update(this.parentPortalSign, this.key);
      } else {
        this.parentPortalSignService.insert(this.parentPortalSign);
      }
    // }
    this.parentPortalSign = new ParentPortalSign();
    this.success=true;
  }

 public hashPwd() {
    btnSignUpClicked(this.parentUserArray);
  }

}
