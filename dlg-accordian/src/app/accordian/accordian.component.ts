import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionAndAnswer } from './service/question-and-answer';
import { AccordianDataService } from './service/accordian-data.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {

  @Input() title = 'Have a question? We can help';
  questions: Observable<QuestionAndAnswer[]>;
  constructor(private service : AccordianDataService) { }

  ngOnInit(): void {
    this.questions = this.service.getFaqs();
  }

}
