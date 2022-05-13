import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Patient } from './patient';
import { Doctor } from 'src/app/doctor/doctor'

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiURL = "http://localhost:7071/api";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.apiURL + '/AllPatients' )
    .pipe( 
      catchError(this.errorHandler)
      )
  }

  getAllDoctors(doctorname): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.apiURL + '/AllDoctors' + doctorname )
    .pipe( 
      catchError(this.errorHandler)
      )
  }
  create(patient): Observable<Patient[]> {
    return this.httpClient.post<Patient[]>(this.apiURL + '/PatientCreate', JSON.stringify(patient), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )

  }

  find(id, patientId): Observable<Patient> {
    return this.httpClient.get<Patient>(this.apiURL + '/GetPatientById/' + id +'/' + patientId)
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