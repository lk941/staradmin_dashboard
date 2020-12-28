import { Component, OnInit } from '@angular/core';
import {NavService} from '../nav/nav.service'

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  constructor(private nav: NavService) { }

  ngOnInit() {
    this.nav.show()
  }

}
