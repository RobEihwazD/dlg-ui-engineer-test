import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { QuestionAndAnswer } from '../service/question-and-answer';

@Component({
  selector: 'app-accordian-panel',
  templateUrl: './accordian-panel.component.html',
  styleUrls: ['./accordian-panel.component.scss']
})
export class AccordianPanelComponent implements OnInit {

  @Input() question: QuestionAndAnswer;
  @Input() showAnswer = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
  }

}
