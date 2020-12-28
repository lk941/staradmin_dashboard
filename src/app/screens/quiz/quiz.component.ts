import { Component, OnInit } from '@angular/core';
import {NavService} from '../nav/nav.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  update= false;
  constructor(private nav: NavService) { }

  ngOnInit() {
    this.nav.show()
  }

}
