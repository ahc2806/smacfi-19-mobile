import { Component, OnInit } from '@angular/core';

interface Componente {
  redirectTo: string; 
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  componentes: Componente[] = [
   {
    redirectTo: '/gel'
   },
   {
    redirectTo: '/statistics'
   },
   {
    redirectTo: '/diagnostics'
   },
   {
    redirectTo: '/canalize'
   },
   {
    redirectTo: '/reports'
   },
   {
    redirectTo: '/users'
   }
  ];

  constructor() { }

  ngOnInit() {
  }

}
