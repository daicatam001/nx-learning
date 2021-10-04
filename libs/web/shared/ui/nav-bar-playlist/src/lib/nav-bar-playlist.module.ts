import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarPlaylistComponent } from './nav-bar-playlist/nav-bar-playlist.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavBarPlaylistComponent
  ],
  exports:[
    NavBarPlaylistComponent
  ]
})
export class NavBarPlaylistModule {}
