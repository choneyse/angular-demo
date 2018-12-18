import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatFeaturedComponent } from './featured/featured.component';
import { FatDateComponent } from './date/date.component';
import { FatHeaderComponent } from './header/header.component';
import { FatSubHeaderComponent } from './sub-header/sub-header.component';
import { ButtonComponent } from './button/button.component';
import { OtherShowsComponent } from './other-shows/other-shows.component';

@NgModule({
  declarations: [AppComponent, FatFeaturedComponent, FatDateComponent, FatHeaderComponent, FatSubHeaderComponent, ButtonComponent, OtherShowsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
