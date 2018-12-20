import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { DateComponent } from './date/date.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ButtonComponent } from './button/button.component';
import { OtherShowsComponent } from './other-shows/other-shows.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { BeyondTheRainbowComponent } from './shows/beyond-the-rainbow/beyond-the-rainbow.component';
import { ADollsHouseComponent } from './shows/a-dolls-house/a-dolls-house.component';
import { MarvelousWonderettesComponent } from './shows/marvelous-wonderettes/marvelous-wonderettes.component';
import { JoinMailingListComponent } from './join-mailing-list/join-mailing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    DateComponent,
    HeaderComponent,
    SubHeaderComponent,
    ButtonComponent,
    OtherShowsComponent,
    BeyondTheRainbowComponent,
    ADollsHouseComponent,
    MarvelousWonderettesComponent,
    JoinMailingListComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
