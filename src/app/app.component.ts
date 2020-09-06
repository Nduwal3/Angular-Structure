import { Component } from '@angular/core';
import { MENU_ITEMS } from './app-menus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //
  // template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kilroy-training';
  menuItems = [];
  showFiller = false;

  // opened: boolean;

  constructor() {
    this.menuItems = MENU_ITEMS;
  }

  sideNavClicked(sideNav) {
    if (!this.isLargeScreen()) {
      sideNav.toggle();
    }
  }

  isLargeScreen(): boolean {
    const WIDTH =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (WIDTH < 1024) {
      return false;
    }
    return true;
  }
}
