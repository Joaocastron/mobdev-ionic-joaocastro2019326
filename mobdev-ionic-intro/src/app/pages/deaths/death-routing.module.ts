import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathsPage } from './death.page';

const routes: Routes = [
  {
    path: '',
    component: DeathsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathPageRoutingModule {}
