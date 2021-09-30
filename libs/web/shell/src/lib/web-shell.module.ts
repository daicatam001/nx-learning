import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebLayoutModule} from '@nx-learning/web/layout';
import {RouterModule} from '@angular/router';
import {webShellRoutes} from './web-shell.routes';

@NgModule({
  imports: [CommonModule, WebLayoutModule, RouterModule.forRoot(webShellRoutes)],
  exports: [RouterModule]
})
export class WebShellModule {
}
