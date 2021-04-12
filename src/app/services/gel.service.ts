import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { api_mongo, Routes } from 'src/constants';

import { Gel } from '../models';
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
export class GelService {

  constructor( private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public getGel(): Observable<Gel[]> {
    return this.http.get<Gel[]>(`${api_mongo}${Routes.gel}`, httpOptions)
      .pipe(
        catchError(this.handleError<Gel[]>('getDispenserGel'))
      )
  }
}
