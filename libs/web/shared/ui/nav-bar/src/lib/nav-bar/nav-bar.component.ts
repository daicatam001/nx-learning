import {Component} from '@angular/core';
import {UiStore} from '@nx-learning/web/shared/data-access/ui-store';

@Component({
  selector: 'nx-learning-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  readonly navItems$ = this.uiStore.navItems;

  constructor(private uiStore: UiStore) {
  }

}
