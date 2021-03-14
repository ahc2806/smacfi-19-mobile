import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataButtons = {
    start: {
      type: 'back-btn',
      url: '/welcome'
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }
}
