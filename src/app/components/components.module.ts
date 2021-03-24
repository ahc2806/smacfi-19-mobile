import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { ButtonsMenuComponent } from './buttons-menu/buttons-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonsMenuComponent,
    HeaderMenuComponent
  ],
  exports: [
    ButtonsMenuComponent,
    HeaderComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
