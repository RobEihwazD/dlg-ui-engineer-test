import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionAndAnswer } from './question-and-answer';

@Injectable({
  providedIn: 'root'
})
export class AccordianDataService {

  DATA_URL = 'assets/data/faqs.json';

  constructor(private http: HttpClient) { }

  getFaqs(): Observable<QuestionAndAnswer[]> {
    return this.http.get<QuestionAndAnswer[]>(this.DATA_URL);
  }

}
