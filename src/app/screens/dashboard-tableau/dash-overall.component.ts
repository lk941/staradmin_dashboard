import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service';
import { Observable, of } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-dash-overall',
  templateUrl: './dash-overall.component.html',
  styleUrls: ['./dash-overall.component.scss']
})
export class OverallDashComponent implements OnInit {

  constructor(private nav: NavService) { }

  bullyListArray = [];
  bullyType = [];

  ngOnInit() {
    this.nav.show()

  }

}