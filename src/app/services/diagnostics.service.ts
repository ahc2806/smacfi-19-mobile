import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';

import { Diagnostics, Student} from '../models'
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
export class DiagnosticsService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public getDiagnostics(): Observable<Diagnostics[]> {
    return this.http.get<Diagnostics[]>(`${api_mysql}${Routes.students}`, httpOptions)
      .pipe(
        catchError(this.handleError<Diagnostics[]>('getDiagnostics'))
      )
  }

  public getDiagnosticById(diagnosticId: Number): Observable<Diagnostics> {
    return this.http.get<Diagnostics>(`${api_mysql}${Routes.students}${diagnosticId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Diagnostics>('getDiagnostics'))
      )
  }

  public addDiagnostic(diagnostic: Diagnostics):Observable<Diagnostics> {
    return this.http.post<Diagnostics>(`${api_mysql}${Routes.students}`, diagnostic, httpOptions)
      .pipe(catchError(this.handleError<Diagnostics>('addDiagnostic')))
  }

  public updateDiagnostic(disagnostic: Diagnostics): Observable<Diagnostics> {
    return this.http.put<Diagnostics>(`${api_mysql}${Routes.students}`, disagnostic, httpOptions)
      .pipe(catchError(this.handleError<Diagnostics>('updateDiagnostic')))
  }

  public deleteDiagnostic(diagnosticId: Number): Observable<Diagnostics> {
    return this.http.delete<Diagnostics>(`${api_mysql}${Routes.students}${diagnosticId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Diagnostics>('getDiagnostics'))
      )
  }
}
