import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dlg-accordian';
  constructor(private iconReg: SvgIconRegistryService) {
    this.iconReg.loadSvg('assets/icons/plus-icon.svg', 'plus-icon').subscribe();
  }
}
