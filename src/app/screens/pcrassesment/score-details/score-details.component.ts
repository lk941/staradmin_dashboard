import { Component, OnInit} from '@angular/core';
import { UniquePipe } from '../unique.pipe';
import { Score } from '../score';
import { ScoreService } from '../score.service';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import {NavService} from '../../nav/nav.service'
//declare var jsPDF: any;

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.component.html',
  styleUrls: ['./score-details.component.scss']
})

export class ScoreDetailsComponent implements OnInit {
  scores : any;
  selectedDate: any;
  selectedName: any;

  constructor(private scoreService : ScoreService, private nav: NavService) { }

  ngOnInit() {
    this.nav.show()
    this.getScoreList();
    
    saveAs;
  }
  public generate(){
    html2canvas(document.getElementById("printthis")).then(canvas => {
			let pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 200, 100);
			pdf.save("ParentChildAssessment.pdf");
		});
  }


  getScoreList(){
    this.scoreService.getScoreList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => 
          ({key: c.payload.key, ...c.payload.val()})
          )
        )
    ).subscribe(scores => {
      this.scores = scores;
      this.selectedDate = null;
      this.selectedName = scores[0].childName;
      console.log(scores);
    });
  }
}
