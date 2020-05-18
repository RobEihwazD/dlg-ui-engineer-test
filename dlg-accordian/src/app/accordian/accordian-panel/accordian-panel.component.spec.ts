import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianPanelComponent } from './accordian-panel.component';

describe('AccordianPanelComponent', () => {
  let component: AccordianPanelComponent;
  let fixture: ComponentFixture<AccordianPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianPanelComponent ]
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
});
