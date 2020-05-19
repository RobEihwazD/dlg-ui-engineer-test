import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AccordianComponent } from './accordian.component';
import { AccordianPanelComponent } from './accordian-panel/accordian-panel.component';
import { AccordianDataService } from './service/accordian-data.service';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AccordianComponent,
    AccordianPanelComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [
    AccordianDataService
  ],
  exports: [AccordianComponent]
})
export class DlgAccordianModule { }
