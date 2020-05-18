import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AccordianComponent } from './accordian.component';
import { AccordianPanelComponent } from './accordian-panel/accordian-panel.component';
import { AccordianDataService } from './service/accordian-data.service';

@NgModule({
  declarations: [
    AccordianComponent,
    AccordianPanelComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers:[
    AccordianDataService
  ]
})
export class DlgAccordianModule { }
