import { Routes, RouterModule } from '@angular/router';

import { FeaturedComponent } from './featured/featured.component';
import { BeyondTheRainbowComponent } from './shows/beyond-the-rainbow/beyond-the-rainbow.component';
import { ADollsHouseComponent } from './shows/a-dolls-house/a-dolls-house.component';
import { MarvelousWonderettesComponent } from './shows/marvelous-wonderettes/marvelous-wonderettes.component';

export const appRoutes: Routes = [
  // { path: ':show', component: FeaturedComponent },
  { path: 'beyond-the-rainbow', component: BeyondTheRainbowComponent },
  { path: 'a-dolls-house-part-2', component: ADollsHouseComponent },
  { path: 'marvelous-wonderettes-dream-on', component: MarvelousWonderettesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'beyond-the-rainbow' }
];

// export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });
