import { Component, Input, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { QuestionAndAnswer } from '../service/question-and-answer';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



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
        style({ transform: 'translateY(0%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('rotate', [
      state('closed', style({ transform: 'rotate(0)' })),
      state('open', style({ transform: 'rotate(45deg)' })),
      transition('open => closed', animate('200ms ease-in')),
      transition('closed => open', animate('200ms ease-in'))
  ]),
  ]
})
export class AccordianPanelComponent implements OnInit {

  @Input() question: QuestionAndAnswer;
  @Input() showAnswer = false;
  @Output() clicked = new EventEmitter<QuestionAndAnswer>()

  private _isClosed = true
  get isClosed(){
    return this._isClosed
  }

  constructor() { }

  ngOnInit(): void {
    this._isClosed = !this.showAnswer;
  }

  onAnimationEvent(event){

    if(event.phasedName === 'done' ){
        this._isClosed = !this._isClosed;
    }
    console.log('this._isClosed  ',this._isClosed , ' animation event', event)
  }
  onClick() {
    //this.showAnswer = !this.showAnswer;
    this.clicked.emit(this.question);
  }

}
