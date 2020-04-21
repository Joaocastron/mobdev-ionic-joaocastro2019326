import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathPageRoutingModule } from './death-routing.module';

import { DeathsPage } from './death.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathPageRoutingModule
  ],
  declarations: [DeathsPage]
})
export class DeathPageModule {}
