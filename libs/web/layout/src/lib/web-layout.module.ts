import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {NavBarModule} from '@nx-learning/web/shared/ui/nav-bar';
import {TopBarModule} from '@nx-learning/web/shared/ui/top-bar';
import {MainViewModule} from '@nx-learning/web/shared/ui/main-view';

@NgModule({
  imports: [CommonModule, NavBarModule, TopBarModule,MainViewModule],
  declarations: [
    LayoutComponent
  ]
})
export class WebLayoutModule {
}
