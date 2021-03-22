import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    if (localStorage.getItem('@auth') && localStorage.getItem('@information')) {
      this.router.navigateByUrl('/menu');
    }
  }

}
