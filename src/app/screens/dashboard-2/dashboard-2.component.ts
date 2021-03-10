import { Component, OnInit } from "@angular/core";
import { ContatoService11 } from '../../contatos11/shared/contato11.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-dashboard-2",
  templateUrl: "./dashboard-2.component.html",
  styleUrls: ["./dashboard-2.component.scss"],

})
export class Dashboard2Component implements OnInit {

  style_img = '';
  LearningStyle: any = ['Auditory', 'Kinesthetic', 'Visual'];
  styleName;

  constructor(private contatoService11: ContatoService11) { }
  LearningListArray = [];
  ChildLearningType = '';

  ngOnInit() {
    this.contatoService11.getLearningStyle().subscribe(list => {
      this.LearningListArray = list.map(item => {
        return {
          ...item.payload.val()
        }
      })
      console.log(this.LearningListArray)

      //Get only the type from firebase
      
      this.ChildLearningType = this.LearningListArray[2]['Jerry'];
    
      console.log(this.ChildLearningType)

      this.style_img = 'assets/images/learning_styles/' + this.ChildLearningType.toLowerCase() + '.PNG';
      console.log(this.style_img)

    

    })
  }

  changeStyle(e) {
    this.styleName.setValue(e.target.value, {
      onlySelf: true
    })
  }
}
