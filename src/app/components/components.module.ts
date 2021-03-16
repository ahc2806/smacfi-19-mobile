import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { ButtonsMenuComponent } from './buttons-menu/buttons-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonsMenuComponent
  ],
  exports: [
    ButtonsMenuComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
