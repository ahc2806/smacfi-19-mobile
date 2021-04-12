import { Component, OnInit } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('@information'));
    this.user.persona.father_surname += ` ${this.user.persona.mother_surname}`;
  }

  ngOnInit() {
    console.log(this.user);
  }

}
