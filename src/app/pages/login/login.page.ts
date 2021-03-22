import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Login } from 'src/app/models';
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

  data: Login = {
    identifier: '',
    password: ''
  }

  constructor(private userService : UsersService, private router : Router) { }

  ngOnInit() {
    if (localStorage.getItem('@auth') && localStorage.getItem('@information')) {
      this.router.navigateByUrl('/menu');
    }
  }

  onSubmit() {
    try {
      this.userService.login(this.data).
      subscribe(res => {
        localStorage.setItem('@auth', res.jwt);
        localStorage.setItem('@information', JSON.stringify(res.user));
        this.router.navigateByUrl('/menu');
      });
    } catch (error) {
      console.error(error)
    }
  }
}
