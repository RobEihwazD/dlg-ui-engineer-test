import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionAndAnswer } from './service/question-and-answer';
import { AccordianDataService } from './service/accordian-data.service';
import { AccordianPanelComponent } from './accordian-panel/accordian-panel.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {

  @ViewChildren(AccordianPanelComponent) panels: QueryList<AccordianPanelComponent>;
  @Input() title = 'Have a question? We can help';
  questions: Observable<QuestionAndAnswer[]>;
  constructor(private service: AccordianDataService, ) { }

  ngOnInit(): void {
    this.questions = this.service.getFaqs();
  }

  questionClickedHandler(question){
    this.panels.forEach( p =>{
      if( p.question.id !== question.id){
        p.showAnswer = false;
      } else if(p.question.id === question.id ){
        p.showAnswer = !p.showAnswer;
      }
    })
  }
}
