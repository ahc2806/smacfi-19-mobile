import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_mysql, login } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

}
