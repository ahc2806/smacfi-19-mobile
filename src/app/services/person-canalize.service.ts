import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';

import { Person_Canalize } from '../models'
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
export class PersonCanalizeService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public getPersonsCanalize(): Observable<Person_Canalize[]> {
    return this.http.get<Person_Canalize[]>(`${api_mysql}${Routes.persons_canalizes}`, httpOptions)
      .pipe(
        catchError(this.handleError<Person_Canalize[]>('getDiagnostics'))
      )
  }

  public getPersonCanalizeById(personId: Number): Observable<Person_Canalize> {
    return this.http.get<Person_Canalize>(`${api_mysql}${Routes.persons_canalizes}${personId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Person_Canalize>('getDiagnostics'))
      )
  }

  public addPersonCanalize(person_canalized: Person_Canalize):Observable<Person_Canalize> {
    return this.http.post<Person_Canalize>(`${api_mysql}${Routes.persons_canalizes}`, person_canalized, httpOptions)
      .pipe(catchError(this.handleError<Person_Canalize>('addDiagnostic')))
  }

  public updatePersonCanalized(personCanalized: Person_Canalize): Observable<Person_Canalize> {
    return this.http.put<Person_Canalize>(`${api_mysql}${Routes.persons_canalizes}${personCanalized.id}`, personCanalized, httpOptions)
      .pipe(catchError(this.handleError<Person_Canalize>('updateDiagnostic')))
  }

  public deletePersonCanalized(personId: Number): Observable<Person_Canalize> {
    return this.http.delete<Person_Canalize>(`${api_mysql}${Routes.students}${personId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Person_Canalize>('getDiagnostics'))
      )
  }

}
