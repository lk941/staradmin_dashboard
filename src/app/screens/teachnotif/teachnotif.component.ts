import { Component, OnInit, ViewChild, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ParentportalService } from '../parent-login/services/parentportal.service';
import { ChildkeyService } from '../select-child-page/childkey.service';
import { NavService } from '../nav/nav.service';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { DialogboxComponent } from '../Dialogbox/dialogbox/dialogbox.component';


@Component({
  selector: 'app-teachnotif',
  templateUrl: './teachnotif.component.html',
  styleUrls: ['./teachnotif.component.scss']
})
export class TeachnotifComponent implements OnInit, DoCheck {
  confcher: any[] = [];
  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['PName', 'CName', 'action'];
  private sort: MatSort;
  private paginator: MatPaginator;

  constructor(private p: ParentportalService, private nav: NavService, private changeDetectorRefs: ChangeDetectorRef, private dialog: MatDialog, private c: ChildkeyService) { }

  ngOnInit() {
    this.nav.show();
    this.confcher = this.p.getConf();
    console.log(this.confcher);
    this.dataSource.data = this.confcher;
  }
  ngDoCheck() {
    
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Service to grab User - Parent from db with existing keys.
  Reject(row_obj) {
    this.p.deleteConf(row_obj.key);
    this.confcher = this.confcher.filter((value, key) => {
      return value.key != row_obj.key;
    });
    this.dataSource.data = this.confcher;
  }

  openDialog(action, obj) {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      data: { obj, action }
    });

    dialogRef.afterClosed().subscribe(result => {
       if (result.event == 'Cancel') {
       } else if (result.event == 'AcceptConf') {
         this.c.setPID(result.data.uid, result.data.pid);
         this.p.acceptConf(result.data.key);
        
      }
    });
  }
}
