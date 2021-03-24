import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GelPageRoutingModule } from './gel-routing.module';

import { GelPage } from './gel.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GelPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GelPage]
})
export class GelPageModule {}
