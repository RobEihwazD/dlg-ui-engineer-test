import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianPanelComponent } from './accordian-panel.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

describe('AccordianPanelComponent', () => {
  let component: AccordianPanelComponent;
  let fixture: ComponentFixture<AccordianPanelComponent>;
  const question = {
    "id": "1",
    "question": "What vehicles are covered?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordianPanelComponent],
      imports: [NoopAnimationsModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should except a question', () => {
    component.question = question;
    expect(component.question.id).toEqual('1');
  })

  it(' should set showAnswer to true ', () => {
    component.showAnswer = true;
    expect(component.showAnswer).toEqual(true);
  })
});
