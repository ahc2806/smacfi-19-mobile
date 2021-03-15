import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';

import { Person } from '../models'
import { Observable, of  } from 'rxjs';
import { catchError } from 'rxjs/operators';

const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE1NzY3Mzk2LCJleHAiOjE2MTgzNTkzOTZ9.6AGIkLr9nDbmJVer4BLF7Rzduwav1krE7gwYqeSBXUo';

const httpOptions = {
  headers: {
    Authorization: `Bearer ${auth}`
  }
}
@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${api_mysql}${Routes.persons}`, httpOptions)
      .pipe(
        catchError(this.handleError<Person[]>('getDiagnostics'))
      )
  }

  public getPersonById(personId: Number): Observable<Person> {
    return this.http.get<Person>(`${api_mysql}${Routes.persons}${personId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Person>('getDiagnostics'))
      )
  }

  public addPerson(person: Person):Observable<Person> {
    return this.http.post<Person>(`${api_mysql}${Routes.persons}`, person, httpOptions)
      .pipe(catchError(this.handleError<Person>('addDiagnostic')))
  }

  public updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${api_mysql}${Routes.persons}`, person, httpOptions)
      .pipe(catchError(this.handleError<Person>('updateDiagnostic')))
  }

  public deletePerson(personId: Number): Observable<Person> {
    return this.http.delete<Person>(`${api_mysql}${Routes.persons}${personId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Person>('getDiagnostics'))
      )
  }
}
