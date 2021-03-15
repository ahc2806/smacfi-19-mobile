import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_mysql, Routes } from 'src/constants';

import { Report } from '../models'
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
export class ReportsService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  public getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${api_mysql}${Routes.reports}`, httpOptions)
      .pipe(
        catchError(this.handleError<Report[]>('getDiagnostics'))
      )
  }

  public getReportById(reportId: Number): Observable<Report> {
    return this.http.get<Report>(`${api_mysql}${Routes.reports}${reportId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Report>('getDiagnostics'))
      )
  }

  public addReport(repost: Report):Observable<Report> {
    return this.http.post<Report>(`${api_mysql}${Routes.reports}`, repost, httpOptions)
      .pipe(catchError(this.handleError<Report>('addDiagnostic')))
  }

  public updateReport(reposr: Report): Observable<Report> {
    return this.http.put<Report>(`${api_mysql}${Routes.reports}${reposr.id}`, reposr, httpOptions)
      .pipe(catchError(this.handleError<Report>('updateDiagnostic')))
  }

  public deleteReport(reportId: Number): Observable<Report> {
    return this.http.delete<Report>(`${api_mysql}${Routes.reports}${reportId}`, httpOptions)
      .pipe(
        catchError(this.handleError<Report>('getDiagnostics'))
      )
  }
}
