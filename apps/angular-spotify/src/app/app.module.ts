import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WebShellModule} from '@nx-learning/web/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebShellModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
