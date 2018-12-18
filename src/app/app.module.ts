import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatFeaturedComponent } from './fat-featured/fat-featured.component';
import { FatDateComponent } from './fat-date/fat-date.component';
import { FatHeaderComponent } from './fat-header/fat-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FatFeaturedComponent,
    FatDateComponent,
    FatHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
