import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service'
import { ContatoService } from '../../contatos1/shared/contato1.service';
import { NavBarService } from 'src/app/partials/navbar/navbar.service';
import { SideBarService } from 'src/app/partials/sidebar/sidebar.service';


@Component({
  selector: 'app-parent-portal',
  templateUrl: './parent-portal.component.html',
  styleUrls: ['./parent-portal.component.scss']
})
export class ParentPortalComponent implements OnInit {
  // parentPortal: parentPortal
  key: string = "";
  success = false;

  constructor(private nav: NavService, private navbar: NavBarService, private sidebar: SideBarService, private contatoService:ContatoService) { }

  parentListArray = [];

  ngOnInit() {
    this.nav.show();
    this.navbar.show();
    this.sidebar.show();

    
    
  }

  onSubmit() {
    
  }

}
