import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

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

  constructor(private userService : UsersService) { }

  ngOnInit() { }

  onSubmit() {
    
  }
}
