import { DOCUMENT } from '@angular/common';
import {Component, Inject, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import { SIDEBAR_MENU_ITEM } from './sidebar-menu';



@Component({
  selector: 'app-root',
  template: `<router-outlet><router-outlet>`
})
export class AppComponent implements OnInit {
  menu = SIDEBAR_MENU_ITEM;
  title = 'Tourist Dashboard';

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.setYourScriptTag();
  }

  private setYourScriptTag() {
    const s = this.document.createElement('script');
    s.type = 'text/javascript';
    s.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapTokenKey}&callback=initMap&libraries=places&v=weekly`
    s.async = true    
    const head = this.document.getElementsByTagName('head')[0];
    head.appendChild(s);
  }

}
