import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
