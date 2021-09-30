import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LeftNavComponent,
    LayoutComponent
  ]
})
export class WebLayoutModule {}
