import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {NavBarModule} from '@nx-learning/web/shared/ui/nav-bar';

@NgModule({
  imports: [CommonModule,NavBarModule],
  declarations: [
    LayoutComponent
  ]
})
export class WebLayoutModule {}
