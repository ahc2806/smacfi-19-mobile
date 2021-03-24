import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticsPageRoutingModule } from './diagnostics-routing.module';

import { DiagnosticsPage } from './diagnostics.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiagnosticsPage]
})
export class DiagnosticsPageModule {}
