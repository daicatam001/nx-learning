import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {WebSharedUiNavBarModule} from '@nx-learning/web/shared/ui/nav-bar';

@NgModule({
  imports: [CommonModule,WebSharedUiNavBarModule],
  declarations: [
    LayoutComponent
  ]
})
export class WebLayoutModule {}
