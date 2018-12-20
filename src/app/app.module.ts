import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { DateComponent } from './date/date.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ButtonComponent } from './button/button.component';
import { OtherShowsComponent } from './other-shows/other-shows.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    DateComponent,
    HeaderComponent,
    SubHeaderComponent,
    ButtonComponent,
    OtherShowsComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
