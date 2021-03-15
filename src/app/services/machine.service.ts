import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';

import { Machine } from '../models';
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
export class MachineService {

  constructor( private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(`${api_mysql}${Routes.machines}`, httpOptions)
      .pipe(
        catchError(this.handleError<Machine[]>('getDiagnostics'))
      )
  }

  public getMachineById(machineId: Number): Observable<Machine> {
    return this.http.get<Machine>(`${api_mysql}${Routes.machines}${machineId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Machine>('getDiagnostics'))
      )
  }

  public addMachine(machine: Machine):Observable<Machine> {
    return this.http.post<Machine>(`${api_mysql}${Routes.machines}`, machine, httpOptions)
      .pipe(catchError(this.handleError<Machine>('addDiagnostic')))
  }

  public updateMachine(machine: Machine): Observable<Machine> {
    return this.http.put<Machine>(`${api_mysql}${Routes.machines}`, machine, httpOptions)
      .pipe(catchError(this.handleError<Machine>('updateDiagnostic')))
  }

  public deleteDiagnostic(machineId: Number): Observable<Machine> {
    return this.http.delete<Machine>(`${api_mysql}${Routes.machines}${machineId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Machine>('getDiagnostics'))
      )
  }

}
