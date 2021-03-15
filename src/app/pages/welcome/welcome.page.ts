import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private studentService: StudentsService) { }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(resp => {
        console.log(resp);
      })
  }

  ngOnInit() {
    console.log('Hi')
    const studens = this.getStudents();
    console.log("The students are: ", studens)
  }

}
