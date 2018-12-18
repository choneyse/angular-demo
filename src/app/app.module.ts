import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatFeaturedComponent } from './fat-featured/fat-featured.component';
import { FatDateComponent } from './fat-date/fat-date.component';

@NgModule({
  declarations: [
    AppComponent,
    FatFeaturedComponent,
    FatDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
