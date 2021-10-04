import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {NavBarModule} from '@nx-learning/web/shared/ui/nav-bar';
import {TopBarModule} from '@nx-learning/web/shared/ui/top-bar';

@NgModule({
  imports: [CommonModule, NavBarModule, TopBarModule],
  declarations: [
    LayoutComponent
  ]
})
export class WebLayoutModule {
}
