import {NavItem} from '@nx-learning/web/shared/data-access/models';
import {ComponentStore} from '@ngrx/component-store';
import {Injectable} from '@angular/core';

interface UIState {
  navItems: NavItem[]
}

@Injectable({providedIn: 'root'})
export class UiStore extends ComponentStore<UIState> {
  constructor() {
    super({
      navItems: [
        {label: 'Home', path: ''},
        {label: 'Search', path: '/search'},
        {label: 'Your Library', path: '/collection'}
      ]
    })
  }

  readonly navItems = this.select(({navItems}) => navItems)
}
