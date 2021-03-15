import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';

// Model
import { User } from '../models'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

}
