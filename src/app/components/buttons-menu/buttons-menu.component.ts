import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-menu',
  templateUrl: './buttons-menu.component.html',
  styleUrls: ['./buttons-menu.component.scss'],
})
export class ButtonsMenuComponent {
  
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() url: string = '';
}
