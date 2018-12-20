import { Routes, RouterModule } from '@angular/router';

import { FeaturedComponent } from './featured/featured.component';

export const appRoutes: Routes = [
  // { path: 'bubu', component: FeaturedComponent },
  { path: ':show', component: FeaturedComponent },
  { path: '', pathMatch: 'full', redirectTo: 'beyond-the-rainbow' }
];

// export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });
