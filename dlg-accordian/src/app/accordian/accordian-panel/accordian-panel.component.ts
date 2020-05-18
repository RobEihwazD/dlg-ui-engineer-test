import { Component, Input, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { QuestionAndAnswer } from '../service/question-and-answer';
import { trigger, transition, style, animate, state } from '@angular/animations';


@Component({
  selector: 'app-accordian-panel',
  templateUrl: './accordian-panel.component.html',
  styleUrls: ['./accordian-panel.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('rotate', [
      state('closed', style({ transform: 'rotate(0)' })),
      state('open', style({ transform: 'rotate(-45deg)' })),
      transition('open => closed', animate('200ms ease-in')),
      transition('open => open', animate('200ms ease-in'))
  ]),
  ]
})
export class AccordianPanelComponent implements OnInit {

  @Input() question: QuestionAndAnswer;
  @Input() showAnswer = false;
  @Output() clicked = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.showAnswer = !this.showAnswer;
    this.clicked.emit(this.showAnswer);
  }

}
