import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from 'src/app/app-menus';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
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
