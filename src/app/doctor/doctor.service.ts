import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  getAllDoctors() {
    throw new Error('Method not implemented.');
  }
  private apiURL = "http://localhost:7071/api";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.apiURL + '/AllDoctors' )
    .pipe( 
      catchError(this.errorHandler)
      )
  }

  create(doctor): Observable<Doctor[]> {
    return this.httpClient.post<Doctor[]>(this.apiURL + '/DoctorCreate', JSON.stringify(doctor), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id, doctorId): Observable<Doctor> {
    return this.httpClient.get<Doctor>(this.apiURL + '/GetDoctorById/' + id +'/' + doctorId)
    .pipe(
      catchError(this.errorHandler)
    )
  }

    errorHandler(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
  } 
}
