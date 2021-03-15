import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';

import { Student } from '../models';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// const auth = localStorage.getItem('auth');
const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE1NzY3Mzk2LCJleHAiOjE2MTgzNTkzOTZ9.6AGIkLr9nDbmJVer4BLF7Rzduwav1krE7gwYqeSBXUo';

const httpOptions = {
  headers: {
    Authorization: `Bearer ${auth}`
  }
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${api_mysql}${Routes.students}`, student, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('addStudent'))
      )
  }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${api_mysql}${Routes.students}`, httpOptions)
      .pipe(
        catchError(this.handleError<Student[]>('getStudents', []))
      )
  }

  public getStudentById(studentId:Number): Observable<Student> {
    return this.http.get<Student>(`${api_mysql}${Routes.students}${studentId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('getStudents'))
      )
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${api_mysql}${Routes.students}${student.id}`, student, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('updateStudent'))
      )
  }

  public deleteStudent(studentId: Number): Observable<Student> {
    return this.http.delete<Student>(`${api_mysql}${Routes.students}${studentId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('deleteStudent'))
      )
  }
}
