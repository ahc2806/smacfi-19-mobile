import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {

  @Input() titulo: string = '';
  @Input() dataButtons: object = {};
  @Input() color: string = '';
}
