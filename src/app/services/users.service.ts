import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// Model
import { Auth, Login, User } from '../models';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public login(user : Login): Observable<Auth> {
    return this.http.post<Auth>(`${api_mysql}${Routes.login}`, user)
      .pipe(
        catchError(this.handleError<Auth>('makeLogin'))
      )
  }

}
